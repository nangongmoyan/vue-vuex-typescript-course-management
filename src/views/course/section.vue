<template>
  <div class="course-section">
    <!-- 阶段列表 -->
    <el-card>
      <div class="card-header" slot="header">
        {{ course.courseName }}
        <el-button
          type="primary"
          @click="handleShowAddSection"
        >添加阶段</el-button>
      </div>
      <el-tree
        :data="sections"
        :props="defaultProps"
        draggable
        :allow-drop="handleAllowDrop"
        v-loading="isLoading"
        @node-drop="handleSort"
      >
        <div class="inner" slot-scope="{ node, data }">
          <span>{{ node.label }}</span>
          <!-- section -->
          <span v-if="data.sectionName" class="actions">
            <el-button @click.stop="handleEditSectionShow(data)">编辑</el-button>
            <el-button
              type="primary"
              @click.stop="handleShowAddLesson(data)"
            >添加课时</el-button>
            <el-select
              class="select-status"
              v-model="data.status"
              placeholder="请选择"
              @change="handleSectionStatusChange(data)"
            >
              <el-option label="已隐藏" :value="0" />
              <el-option label="待更新" :value="1" />
              <el-option label="已更新" :value="2" />
            </el-select>
          </span>
          <!-- lession -->
          <span v-else class="actions">
            <el-button @click="handleShowEditLesson(data, node.parent.data)">编辑</el-button>
            <el-button
              type="success"
              @click="$router.push({
                name:'course-video',
                params:{ courseId },
                query:{sectionId: node.parent.id, lessonId: data.id}
              })"
            >上传视频</el-button>
            <el-select
              class="select-status"
              v-model="data.status"
              placeholder="请选择"
              @change="handleLessonStatusChange(data)"
            >
              <el-option label="已隐藏" :value="0" />
              <el-option label="待更新" :value="1" />
              <el-option label="已更新" :value="2" />
            </el-select>
          </span>
        </div>
      </el-tree>
    </el-card>
    <!-- /阶段列表 -->

    <!-- 添加阶段 -->
    <el-dialog
      title="添加课程阶段"
      :visible.sync="isAddSectionShow"
    >
      <el-form ref="section-form" :model="section" label-width="70px">
        <el-form-item label="课程名称">
          <el-input
            :value="course.courseName"
            autocomplete="off"
            disabled
          ></el-input>
        </el-form-item>
        <el-form-item label="章节名称" prop="sectionName">
          <el-input v-model="section.sectionName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="章节描述" prop="description">
          <el-input v-model="section.description" type="textarea" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="章节排序" prop="orderNum">
          <el-input-number v-model="section.orderNum"></el-input-number>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="isAddSectionShow = false">取 消</el-button>
        <el-button type="primary" @click="handleAddSection">确 定</el-button>
      </div>
    </el-dialog>
    <!-- /添加阶段 -->

    <!-- 添加课时 -->
    <el-dialog
      title="添加课时"
    visible.sync="true"
    >
      <el-form ref="lesson-form" :model="lesson" label-width="100px">
        <el-form-item label="课程名称">
          <el-input
            :value="course.courseName"
            autocomplete="off"
            disabled
          ></el-input>
        </el-form-item>
        <el-form-item label="章节名称" prop="sectionName">
          <el-input :value="lesson.sectionName" disabled autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="课时名称" prop="sectionName">
          <el-input v-model="lesson.theme" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="时长" prop="description">
          <el-input v-model.number="lesson.duration" type="number" autocomplete="off">
            <template slot="append">分钟</template>
          </el-input>
        </el-form-item>
        <el-form-item label="是否开放试听" prop="description">
          <el-switch v-model="lesson.isFree"></el-switch>
        </el-form-item>
        <el-form-item label="课时排序" prop="description">
          <el-input-number v-model="lesson.orderNum"></el-input-number>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="isAddLessonShow = false">取 消</el-button>
        <el-button type="primary" @click="handleAddLesson">确 定</el-button>
      </div>
    </el-dialog>
    <!-- /添加课时 -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Form } from 'element-ui'
import { courseApi, courseLessonApi, courseSectionApi } from '@/services/api'
import { CourseSectionData, LessonDTO, SectionItem } from '@/features/course-section'
import { CourseTwoItem } from '@/features/course'

export default Vue.extend({
  name: 'CourseSection',
  props: {
    courseId: {
      type: [String, Number],
      required: true
    }
  },
  data ():CourseSectionData {
    const defaultProps = {
      children: 'lessonDTOS',
      label (data: any) {
        return data.sectionName || data.theme
      }
    }

    const section = {
      courseId: this.courseId,
      sectionName: '',
      description: '',
      orderNum: 0,
      status: 0
    }

    const lesson = {
      courseId: this.courseId,
      sectionId: undefined,
      sectionName: '',
      theme: '',
      duration: 0,
      isFree: false,
      orderNum: 0,
      status: 0
    }

    return {
      course: {} as CourseTwoItem,
      sections: [],
      defaultProps,
      isAddSectionShow: false,
      section,
      isAddLessonShow: false,
      lesson,
      isLoading: false
    }
  },

  created () {
    this.loadSections()
    this.loadCourse()
  },

  methods: {
    loadCourse () {
      courseApi.getCourseById(this.courseId).then(rlt => {
        this.course = rlt.data
      })
    },

    loadSections () {
      courseSectionApi.getSectionAndLesson(this.courseId).then(rlt => {
        this.sections = rlt.data
      })
    },

    handleShowAddSection () {
      this.section = { // 防止数据还是编辑时获取的数据
        courseId: this.courseId,
        sectionName: '',
        description: '',
        orderNum: 0,
        status: 0
      }
      this.isAddSectionShow = true
    },

    handleAddSection () {
      courseSectionApi.saveOrUpdateSection(this.section as SectionItem).then(_ => {
        this.loadSections()
        ;(this.$refs['section-form'] as Form).resetFields()
        this.$message.success('操作成功')
      })
    },

    handleEditSectionShow (section: SectionItem) {
      courseSectionApi.getSectionById(section.id).then(rlt => {
        this.section = rlt.data
        this.isAddSectionShow = true
      })
    },

    handleSectionStatusChange (section: SectionItem) {
      courseSectionApi.saveOrUpdateSection(section).then(_ => {
        this.$message.success('操作成功')
      })
    },

    handleLessonStatusChange (lesson: LessonDTO) {
      courseLessonApi.saveOrUpdateLesson(lesson).then(_ => {
        this.$message.success('操作成功')
      })
    },

    handleShowAddLesson (data: SectionItem) {
      this.lesson = {
        sectionName: data.sectionName,
        sectionId: data.id,
        courseId: this.courseId,
        theme: '',
        duration: 0,
        isFree: false,
        orderNum: 0,
        status: 0
      }
      this.isAddLessonShow = true
    },

    handleAddLesson () {
      courseLessonApi.saveOrUpdateLesson(this.lesson as LessonDTO).then(_ => {
        this.$message.success('操作成功')
        this.loadSections()
        this.isAddLessonShow = false
      })
    },

    handleShowEditLesson (lesson: LessonDTO, section: SectionItem) {
      this.lesson = lesson
      this.lesson.sectionName = section.sectionName
      this.isAddLessonShow = true
    },

    handleAllowDrop (draggingNode: any, dropNode: any, type: any) {
      // draggingNode 拖动的节点
      // dropNode 放置的目标节点
      // type：'prev'、'inner' 和 'next'，分别表示放置在目标节点前、插入至目标节点和放置在目标节点后
      return draggingNode.data.sectionId === dropNode.data.sectionId && type !== 'inner'
    },

    async handleSort (dragNode: any, dropNode: any, type: any, event: any) {
      this.isLoading = true
      try {
        await Promise.all(dropNode.parent.childNodes.map((item: any, index: number) => {
          const params = {
            id: item.data.id,
            orderNum: index + 1
          }
          return dragNode.data.lessonDTOS
          // 阶段
            ? courseSectionApi.saveOrUpdateSection(params as SectionItem)
          // 课时
            : courseLessonApi.saveOrUpdateLesson(params as LessonDTO)
        }))
        this.$message.success('排序成功')
      } catch (err) {
        console.log(err)
        this.$message.error('排序失败')
      }
      this.isLoading = false
    }
  }
})
</script>

<style lang="scss" scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.inner {
  flex: 1;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ebeef5;
}

::v-deep .el-tree-node__content {
  height: auto;
}

.select-status {
  max-width: 100px;
  margin-left: 8px;
}
</style>
