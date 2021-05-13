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
        <h1>Get an email to change password</h1>
        <div class="textfield-container">
          <TextField
            label="Email"
            v-model="email"
            placeholder="Your Email"
          />
        </div>
        <Button title='Send' type='submit' />
      </form>
    </div>
  </Layout>
</template>

<script>
import { forgotPassword } from '../../apis/auth'

import Alert from '../../components/alert'
import Button from '../../components/button'
import Layout from '../../components/layout'
import TextField from '../../components/textfield'

export default {
  components: { Alert, Layout, TextField, Button },
  data: function () {
    return {
      email: '',
      showAlert: false,
      alertType: 'success',
      alertMessage: 'Email has been sent. You can check your email to change password!'
    }
  },
  methods: {
    formSubmit: async function () {
      try {
        const result = await forgotPassword(this.email)
        this.showAlert = true
        return result
      } catch (error) {
        console.log('error')
        this.alertType = 'error'
        this.alertMessage = 'Failed to ask to change password'
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
