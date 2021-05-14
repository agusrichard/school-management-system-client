<template>
  <Layout>
    <Alert
      v-if="showAlert"
      :type="alertType"
      :message="alertMessage"
      @close="() => showAlert = false"
    />
    <div class="form-container">
      <form @submit.prevent="() => formSubmit()">
        <h1>Change Password</h1>
        <div class="textfield-container">
          <TextField
            type="password"
            label="Password"
            v-model="password"
            placeholder="Password"
          />
          <TextField
            type="password"
            label="Confirm Password"
            v-model="confirmPassword"
            placeholder="Confirm Password"
          />
        </div>
        <Button title='Send' type='submit' />
      </form>
    </div>
  </Layout>
</template>

<script>
import { changePassword } from '../../apis/auth'

import Alert from '../../components/alert'
import Button from '../../components/button'
import Layout from '../../components/layout'
import TextField from '../../components/textfield'

export default {
  components: { Alert, Layout, TextField, Button },
  data: function () {
    return {
      password: '',
      confirmPassword: '',
      showAlert: false,
      alertType: 'error',
      alertMessage: 'Failed to change your password. Please try again!'
    }
  },
  methods: {
    formSubmit: async function () {
      try {
        if (this.password !== this.confirmPassword) {
          this.alertMessage = 'Password and confirm password must the same'
          throw Error()
        }
        const query = this.$route.query
        await changePassword(query.email, query.verification_code, this.password)
        this.$router.push({ name: 'Login' })
      } catch (error) {
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

form {
  width: 50%;
  display: flex;
  padding-top: 50px;
  align-items: center;
  border-radius: 10px;
  padding-bottom: 50px;
  background: #efefef;
  flex-direction: column;
}

h1 {
  font-size: 28px;
}

.textfield-container {
  margin-top: 50px;
  margin-bottom: 25px;
}
</style>
