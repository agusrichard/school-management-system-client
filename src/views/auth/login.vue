<template>
  <Layout>
    <div class="form-container">
      <AuthForm formTitle='Login' @submit="submit" :isRegister="false" />
    </div>
  </Layout>
</template>

<script>
import Layout from '../../components/layout'
import AuthForm from '../../components/auth-form'

export default {
  name: 'Login',
  components: { Layout, AuthForm },
  methods: {
    submit: function (data) {
      console.log('login')
    }
  }
}
</script>

<style scoped>
.form-container {
  display: flex;
  padding-top: 100px;
  justify-content: center;
}
</style>
