<template>
  <div ref="editor" class="text-editor"></div>
</template>

<script lang="ts">
import { courseApi } from '@/services/api'
import Vue from 'vue'
import E from 'wangeditor'

export default Vue.extend({
  name: 'TextEditor',
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  // 组件已经渲染好，可以初始化操作 DOM 了
  mounted () {
    this.initEditor()
  },
  methods: {
    initEditor () {
      const editor = new E(this.$refs.editor as any)
      // 注意：事件监听必须在 create 之前
      editor.config.onchange = (value: string) => {
        this.$emit('input', value)
      }
      editor.create()

      // 注意：设置初始化必须在 create 之后
      setTimeout(() => editor.txt.html(this.value), 250)

      editor.config.customUploadImg = function (resultFiles:any[], insertImgFn:any) {
        // 1.把用户悬着的resultFiles上传到服务端
        const fd = new FormData()
        fd.append('file', resultFiles[0])
        courseApi.uploadCourseImage(fd).then(rlt => {
          if (rlt.code === '000000') {
            insertImgFn(rlt.data.name)
          }
        })
      }
    }
  }
})
</script>

<style lang="scss" scoped></style>
