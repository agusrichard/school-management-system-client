<template>
  <Layout>
    <Alert :isShow="showAlert"
      message="Success to register your account. Please check your email to validate your account!"
    />
    <div class="form-container">
      <AuthForm formTitle='Register' @submit="submit" :isRegister="true" />
    </div>
  </Layout>
</template>

<script>
import { register } from '../../apis/register'

import Alert from '../../components/alert'
import Layout from '../../components/layout'
import AuthForm from '../../components/auth-form'

export default {
  name: 'Register',
  components: { Layout, AuthForm, Alert },
  data: function () {
    return {
      showAlert: false
    }
  },
  methods: {
    submit: function (data) {
      const result = register(data.email, data.password)
      this.showAlert = !this.showAlert
      return result
    }
  }
}
</script>

<style scoped>
.form-container {
  display: flex;
  padding-top: 150px;
  justify-content: center;
}
</style>
