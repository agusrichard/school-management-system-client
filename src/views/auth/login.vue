<template>
  <Layout>
    <Alert
      v-if="showAlert"
      :type="alertType"
      :message="alertMessage"
      @close="() => showAlert = false"
    />
    <div class="form-container">
      <AuthForm formTitle='Login' @submit="submit" :isRegister="false" />
    </div>
  </Layout>
</template>

<script>
import { login } from '../../apis/auth'

import Alert from '../../components/alert'
import Layout from '../../components/layout'
import AuthForm from '../../components/auth-form'

export default {
  name: 'Login',
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
        const result = await login(data.email, data.password)
        this.$cookies.set('access-token', result.access_token)
        this.$store.dispatch('auth/setLogin', { status: true })
        this.$router.push({ name: 'UserProfile' })
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
