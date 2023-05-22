<template>
  <div class="menu">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <el-button @click="$router.push({ name: 'menu-create' })">添加菜单</el-button>
      </div>
      <el-table
        :data="menus"
        style="width: 100%">
        <el-table-column
          label="编号"
          min-width="150"
          type="index">
        </el-table-column>
        <el-table-column
          prop="name"
          label="菜单名称"
          min-width="150">
        </el-table-column>
        <el-table-column
          prop="level"
          label="菜单级数"
          min-width="150">
        </el-table-column>
        <el-table-column
          prop="icon"
          label="前端图标"
          min-width="150">
        </el-table-column>
        <el-table-column
          prop="orderNum"
          label="排序"
          min-width="150">
        </el-table-column>
        <el-table-column
          label="操作"
          min-width="150">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.row)">编辑</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { menuApi } from '@/services/api'
import { MenuIndexData, MenuItem } from '@/features/menu/models'

export default Vue.extend({
  name: 'MenuIndex',
  data (): MenuIndexData {
    return {
      /** 菜单列表 */
      menus: []
    }
  },

  created () {
    this.loadAllMenus()
  },

  methods: {
    loadAllMenus () {
      menuApi.getAll().then((rlt) => {
        if (rlt.code === '000000') {
          this.menus = rlt.data
        }
      })
    },

    handleEdit (item: any) {
      this.$router.push({
        name: 'menu-edit',
        params: {
          id: item.id
        }
      })
    },

    handleDelete (item: MenuItem) {
      this.$confirm('确认删除吗？', '删除提示', {})
        .then(() => {
          // 请求删除操作
          menuApi.delete(item.id).then((rlt) => {
            if (rlt.code === '000000') {
              this.$message.success('删除成功')
              this.loadAllMenus() // 更新数据列表
            } else {
              this.$message.error(rlt.mesg)
            }
          })
        })
        .catch(err => { // 取消执行这里
          console.log(err)
          this.$message.info('已取消删除')
        })
    }
  }
})
</script>

<style lang="scss" scoped></style>
