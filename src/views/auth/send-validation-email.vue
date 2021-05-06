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
        <h1>Send Validation Email</h1>
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
import Alert from '../../components/alert'
import Button from '../../components/button'
import Layout from '../../components/layout'
import TextField from '../../components/textfield'

export default {
  components: { Alert, Layout, TextField, Button },
  data: function () {
    return {
      showAlert: false,
      alertType: 'success',
      alertMessage: 'Success to register. Please check your email to validate your account!'
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
