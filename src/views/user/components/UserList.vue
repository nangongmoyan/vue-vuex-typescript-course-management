<template>
  <el-card>
    <div slot="header">
      <el-form :model="filterParams" ref="filter-form">
        <el-form-item label="手机号" prop="phone">
          <el-input v-model="filterParams.phone"></el-input>
        </el-form-item>
        <el-form-item label="注册时间" prop="rangeDate">
          <el-date-picker
            v-model="filterParams.rangeDate"
            type="datetimerange"
            range-separator="至"
            start-placeholder="开始时间"
            end-placeholder="结束时间"
            value-format="yyyy-MM-dd"
          />
        </el-form-item>
        <el-form-item>
          <el-button
            :disabled="isLoading"
            @click="handleReset"
          >重置</el-button>
          <el-button
            type="primary"
            @click="handleQuery"
            :disabled="isLoading"
          >查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-table
      :data="users"
      style="width: 100%"
      v-loading="isLoading"
    >
      <el-table-column prop="id" label="用户ID">
      </el-table-column>
      <el-table-column prop="name" label="头像">
        <template slot-scope="scope">
          <img width="30px" :src="scope.row.portrait || 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png'">
        </template>
      </el-table-column>
      <el-table-column prop="name" label="用户名">
      </el-table-column>
      <el-table-column prop="phone" label="手机号">
      </el-table-column>
      <el-table-column prop="createTime"  label="注册时间">
      </el-table-column>
      <!-- <el-table-column
        prop="name"
        label="状态"
        width="80">
        <template slot-scope="scope">
          <el-switch
            v-model="scope.row.status"
            active-value="ENABLE"
            inactive-value="DISABLE"
            active-color="#13ce66"
            inactive-color="#ff4949"
            @change="handleForbidUser(scope.row)"
          >
          </el-switch>
        </template>
      </el-table-column> -->
      <el-table-column
        prop="address"
        label="操作">
        <template slot-scope="scope">
          <el-button
            type="text"
            @click="handleSelectRole(scope.row)"
          >分配角色</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
      title="分配角色"
      :visible.sync="dialogVisible"
      width="50%"
    >
      <el-select v-model="roleIdList" multiple placeholder="请选择">
        <el-option
          v-for="item in roles"
          :key="item.id"
          :label="item.name"
          :value="item.id">
        </el-option>
      </el-select>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button
          type="primary"
          @click="handleAllocRole"
        >确 定</el-button>
      </span>
    </el-dialog>
  </el-card>
</template>

<script lang="ts">
import Vue from 'vue'
import { userApi } from '@/services/api/user'
import { Form } from 'element-ui'
import { roleApi } from '@/services/api/role'
import { RecordTwoItem, UserListData } from '@/features/user'

export default Vue.extend({
  name: 'UserList',
  data ():UserListData {
    return {
      users: [],
      filterParams: {
        currentPage: 1,
        pageSize: 100,
        phone: '',
        startCreateTime: '',
        endCreateTime: '',
        rangeDate: []
      },
      isLoading: true,
      dialogVisible: false,
      roles: [],
      roleIdList: [],
      currentUser: null // 分配角色的当前用户
    }
  },

  created () {
    this.loadUsers()
  },

  methods: {
    loadUsers () {
      this.isLoading = true
      const { rangeDate } = this.filterParams
      console.log({ rangeDate })
      if (rangeDate && rangeDate.length) {
        this.filterParams.startCreateTime = rangeDate[0]
        this.filterParams.endCreateTime = rangeDate[1]
      } else {
        this.filterParams.startCreateTime = ''
        this.filterParams.endCreateTime = ''
      }
      userApi.getUserPages(this.filterParams).then(rlt => {
        this.users = rlt.data.records
      }).finally(() => {
        this.isLoading = false
      })
    },

    handleForbidUser (user: RecordTwoItem) {
      userApi.forbidUser(user.id).then(rlt => {
        console.log({ handleForbidUser: rlt })
      })
    },

    handleQuery () {
      this.filterParams.currentPage = 1
      this.loadUsers()
    },

    handleReset () {
      (this.$refs['filter-form'] as Form).resetFields()
      this.loadUsers()
    },

    handleSelectRole (user: RecordTwoItem) {
      this.currentUser = user
      // 加载角色列表
      roleApi.getAllRoles().then(rlt => {
        this.roles = rlt.data
      })

      roleApi.getUserRoles(this.currentUser.id).then(rlt => {
        this.roleIdList = rlt.data.map((item) => item.id)
      })

      // 展示对话框
      this.dialogVisible = true
    },

    handleAllocRole () {
      if (this.currentUser) {
        roleApi.allocateUserRoles({
          userId: this.currentUser.id,
          roleIdList: this.roleIdList
        }).then(rlt => {
          if (rlt.code === '000000') {
            this.$message.success('操作成功')
          } else {
            this.$message.error(rlt.mesg)
          }
        }).finally(() => {
          this.dialogVisible = false
        })
      } else {
        this.$message.error('未获取到该用户相关信息')
      }
    }
  }
})
</script>

<style lang="scss" scoped></style>
