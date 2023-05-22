<template>
  <div class="alloc-resource">
    <el-card>
      <div slot="header">
        <span>分配资源</span>
      </div>
      <el-tree
        ref="tree"
        :data="resources"
        node-key="id"
        :props="defaultProps"
        show-checkbox
        :default-checked-keys="checkedKeys"
        :default-expanded-keys="checkedKeys"
      ></el-tree>
      <div style="text-align: center">
        <el-button @click="resetChecked">清空</el-button>
        <el-button type="primary" @click="onSave">保存</el-button>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { resourceApi } from '@/services/api/resource'
import { resourceCategoryApi } from '@/services/api/resource-category'
import { Tree } from 'element-ui'
import { RecordItem } from '@/features/common'
import { ResourceCategorieItem } from '@/features/resource-category'
import { AllocResourceData, RoleResourceItem } from '@/features/resource'

export default Vue.extend({
  name: 'AllocResource',
  props: {
    roleId: {
      type: [String, Number],
      required: true
    }
  },
  data (): AllocResourceData {
    return {
      resources: [],
      defaultProps: {
        children: 'children',
        label: 'name'
      },
      checkedKeys: []
    }
  },
  created () {
    this.loadResources()
    this.loadRoleResources()
  },
  methods: {
    loadResources () {
      Promise.all([resourceApi.getAllResources(), resourceCategoryApi.getResourceCategories()]).then((rlt) => {
        const resources = rlt[0].data
        const resourceCategories = rlt[1].data

        resources.forEach((r: RecordItem) => {
          const category = resourceCategories.find((c: ResourceCategorieItem) => c.id === r.categoryId)
          if (category) {
            category.children = category.children || []
            category.children.push(r)
          }
        })
        // 修改顶层分类 ID：因为分类 ID 和资源 ID 冲突
        resourceCategories.forEach((item: ResourceCategorieItem) => {
          item.id = Math.random()
        })

        this.resources = resourceCategories
      })
    },

    loadRoleResources () {
      resourceApi.getRoleResources(this.roleId).then(rlt => {
        this.getCheckedResources(rlt.data)
      })
    },

    getCheckedResources (resources: RoleResourceItem[]) {
      resources.forEach((r: RoleResourceItem) => {
        r.resourceList && r.resourceList.forEach((c: RecordItem) => {
          if (c.selected) {
            this.checkedKeys = [...this.checkedKeys, c.id]
          }
        })
      })
    },

    async onSave () {
      const checkedNodes = (this.$refs.tree as Tree).getCheckedNodes()
      const resourceIdList: number[] = []
      checkedNodes.forEach(item => {
        if (!item.children) {
          resourceIdList.push(item.id)
        }
      })
      await resourceApi.allocateRoleResources({
        roleId: this.roleId,
        resourceIdList
      })
      this.$message.success('保存成功')
      this.$router.back()
    },

    resetChecked () {
      (this.$refs.tree as Tree).setCheckedKeys([])
    }
  }
})
</script>

<style lang="scss" scoped></style>
