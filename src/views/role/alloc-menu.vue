<template>
  <div class="alloc-menu">
    <el-card>
      <div slot="header">
        <span>分配菜单</span>
      </div>
      <el-tree
        ref="menu-tree"
        :data="menus"
        node-key="id"
        :props="defaultProps"
        :default-checked-keys="checkedKeys"
        show-checkbox
        default-expand-all
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
import { menuApi } from '@/services/api/menu'
import { Tree } from 'element-ui'
import { AllocMenuData, RoleMenuItem } from '@/features/menu'

export default Vue.extend({
  name: 'AllocMenu',
  props: {
    roleId: {
      type: [String, Number],
      required: true
    }
  },
  data (): AllocMenuData {
    return {
      menus: [],
      defaultProps: {
        children: 'subMenuList',
        label: 'name'
      },
      checkedKeys: []
    }
  },

  created () {
    this.loadMenus()
    this.loadRoleMenus()
  },

  methods: {
    loadRoleMenus () {
      menuApi.getRoleMenus(this.roleId).then(rlt => {
        this.getCheckedKeys(rlt.data)
      })
    },

    getCheckedKeys (menus: RoleMenuItem[]) {
      menus.forEach((menu: RoleMenuItem) => {
        if (menu.selected) {
          this.checkedKeys = [...this.checkedKeys, menu.id]
        }
        if (menu.subMenuList) {
          this.getCheckedKeys(menu.subMenuList)
        }
      })
    },

    loadMenus () {
      menuApi.getMenuNodeList().then(rlt => {
        this.menus = rlt.data
      })
    },

    async onSave () {
      const menuIdList = (this.$refs['menu-tree'] as Tree).getCheckedKeys()
      // 拿到选中节点的数据 id 列表
      // 请求提交保存
      await menuApi.allocateRoleMenus({
        roleId: this.roleId,
        menuIdList
      })
      this.$message.success('操作成功')
      this.$router.back()
    },

    resetChecked () {
      (this.$refs['menu-tree'] as Tree).setCheckedKeys([])
    }
  }
})
</script>

<style lang="scss" scoped></style>
