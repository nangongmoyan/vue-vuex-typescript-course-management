<template>
  <el-menu
    class="el-menu"
    default-active="4"
    @open="handleOpen"
    @close="handleClose"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    router
    :collapse="false"
  >
    <MenuItem
      v-for="menu in menuList"
      :key="menu.id"
      :menu="menu"
    />
  </el-menu>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
import MenuItem from './MenuItem.vue'

export default Vue.extend({
  name: 'AppMenu',
  components: {
    MenuItem
  },
  computed: {
    ...mapState(['menuList'])
  },
  methods: {
    handleOpen (key: string, keyPath: string): void {
      console.log(key, keyPath)
    },

    handleClose (key: string, keyPath: string): void {
      console.log(key, keyPath)
    }
  }
})
</script>

<style lang="scss" scoped></style>
