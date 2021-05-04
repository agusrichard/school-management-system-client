<template>
  <Layout>
    <div class="form-container">
      <AuthForm formTitle='Register' @submit="submit" />
    </div>
  </Layout>
</template>

<script>
import { register } from '../../apis/register'

import Layout from '../../components/layout'
import AuthForm from '../../components/auth-form'

export default {
  name: 'Register',
  components: { Layout, AuthForm },
  methods: {
    submit: function (data) {
      return register(data.email, data.password)
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
