<template>
    <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>

    <el-breadcrumb-item
      v-for="routeRecord in routeRecords"
      :key="routeRecord.path">
      {{ routeRecord.meta && routeRecord.meta.title }}
    </el-breadcrumb-item>

  </el-breadcrumb>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'BreadCrumb',
  computed: {
    routeRecords () {
      return this.$route.matched
    }
  }
})
</script>

<style lang="scss" scoped></style>
