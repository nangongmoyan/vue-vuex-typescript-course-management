<template>

    <div class="login">
      <el-form
        class="login-form"
        label-position="top"
        ref="form"
        :model="form"
        :rules="rules"
        label-width="80px"
      >
        <el-container>
          <el-aside width="100px ">
            <el-image
            style="width: 100px; height: 100px"
            :src="require('@/assets/nangongmoyan-com.png')"
            />
          </el-aside>
          <el-container>
            <el-header>Education Boss</el-header>
            <el-main>管理系统</el-main>
          </el-container>
        </el-container>

        <el-form-item label="手机号" prop="phone">
          <el-input v-model="form.phone"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            class="login-btn"
            type="primary"
            :loading="isLoginLoading"
            @click="onSubmit"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </div>

</template>

<script lang="ts">
import Vue from 'vue'
import { Form } from 'element-ui'
import { authApi } from '@/services/api'
export default Vue.extend({
  name: 'LoginIndex',
  data () {
    return {
      form: {
        phone: '18201288771',
        password: '111111'
      },
      rules: {
        phone: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          {
            pattern: /^1\d{10}$/,
            message: '请输入正确的手机号',
            trigger: 'blur'
          }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          {
            min: 6,
            max: 18,
            message: '长度在 6 到 18 个字符',
            trigger: 'blur'
          }
        ]
      },
      isLoginLoading: false
    }
  },

  methods: {
    async onSubmit () {
      try {
        // 1. 表单验证
        await (this.$refs.form as Form).validate()
        // 登录按钮 loading
        this.isLoginLoading = true
        // 2. 验证通过 -> 提交表单
        const rlt = await authApi.login(this.form)
        // 3.处理请求结果

        if (rlt.state !== 1) {
          // 3.1失败：给出提示
          this.$message.error(rlt.message)
        } else {
          // 3.2登录成功
          // 记录登录状态，状态需要能够全局访问（放到 Vuex 容器中）
          this.$store.commit('setUser', rlt.content)
          // 跳转回原来页面或首页
          this.$router.push((this.$route.query.redirect as string) || '/').catch(err => {
            console.log({ err })
          })
          this.$message.success('登录成功')
        }
      } catch (error) {}
      // 结束登录按钮的 loading
      this.isLoginLoading = false
    }
  }
})
</script>

<style lang="scss" scoped>

  .el-header , .el-main{
    line-height: 50px;
    text-align: center;
    padding: 0;
    // background-color: #F1F;
    font-size: 25px;
  }

.login {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .login-form {
    width: 300px;
    background: #fff;
    padding: 20px;
    border-radius: 5px;
  }
  .login-btn {
    width: 100%;
  }
}
</style>
