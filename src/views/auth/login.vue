<template>
  <Layout>
    <div class="form-container">
      <AuthForm formTitle='Login' />
    </div>
  </Layout>
</template>

<script>
import Layout from '../../components/layout'
import AuthForm from '../../components/auth-form'

export default {
  name: 'Login',
  components: { Layout, AuthForm }
}
</script>

<style scoped>
.form-container {
  display: flex;
  padding-top: 100px;
  justify-content: center;
}
</style>
