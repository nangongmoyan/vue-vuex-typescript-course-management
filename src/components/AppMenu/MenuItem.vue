<template>
  <div v-if="menu.shown" class="menu-item">
    <!-- 如果有子菜单并且至少有1个孩子是 shown 展示状态 -->
    <el-submenu v-if="menu.subMenuList && menu.subMenuList.some(item => item.shown)" :index="menu.href">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>{{ menu.name }}</span>
      </template>
      <!-- 组件递归必须得有 name -->
      <MenuItem
        :menu="subMenu"
        v-for="subMenu in menu.subMenuList"
        :key="subMenu.id"
      />
      <!-- <el-menu-item index="/role">
        <i class="el-icon-setting"></i>
        <span slot="title">角色管理</span>
      </el-menu-item> -->
    </el-submenu>
    <el-menu-item v-else :index="menu.href">
      <i class="el-icon-setting"></i>
      <span slot="title">{{ menu.name }}</span>
    </el-menu-item>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'MenuItem',
  props: {
    menu: {
      type: Object,
      required: true
    }
  }
})
</script>

<style lang="scss" scoped></style>
