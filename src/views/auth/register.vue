<template>
  <Layout>
    <Alert
      v-if="showAlert"
      :type="alertType"
      :message="alertMessage"
      @close="() => showAlert = false"
    />
    <div class="form-container">
      <AuthForm formTitle='Register' @submit="submit" :isRegister="true" />
    </div>
  </Layout>
</template>

<script>
import { register } from '../../apis/auth'

import Alert from '../../components/alert'
import Layout from '../../components/layout'
import AuthForm from '../../components/auth-form'

export default {
  name: 'Register',
  components: { Layout, AuthForm, Alert },
  data: function () {
    return {
      showAlert: false,
      alertType: 'success',
      alertMessage: 'Success to register. Please check your email to validate your account!'
    }
  },
  methods: {
    submit: async function (data) {
      try {
        const result = await register(data.email, data.password)
        this.alertType = 'success'
        this.showAlert = true
        return result
      } catch (error) {
        console.log('error')
        this.alertType = 'error'
        this.alertMessage = 'Email has been registered. Please choose another email to register!'
        this.showAlert = true
        return error
      }
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
