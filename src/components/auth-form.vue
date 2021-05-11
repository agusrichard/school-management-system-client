<template>
  <form @submit.prevent="() => formSubmit()">
    <h1>{{ formTitle }}</h1>
    <div class="textfield-container">
      <TextField
        label="Email"
        v-model="email"
        placeholder="Your Email"
      />
      <TextField
        type="password"
        label="Password"
        v-model="password"
        placeholder="Your Password"
      />
    </div>
    <Button :title='formTitle' type='submit' />
    <div class="auth-bottom">
      <p v-if="isRegister">Already have an account and have validated your account: <router-link to="/auth/login">login</router-link></p>
      <p v-else>Have no account yet: <router-link to="/auth/register">register</router-link></p>
      <p>Have not received your confirmation email: <router-link to="/auth/send-validation-email">send validation email</router-link></p>
    </div>
  </form>
</template>

<script>
import Button from './button'
import TextField from './textfield'

export default {
  props: ['formTitle', 'submit', 'isRegister'],
  components: { TextField, Button },
  data: function () {
    return { email: '', password: '' }
  },
  methods: {
    formSubmit: function () {
      this.$emit('submit', { email: this.email, password: this.password })
    }
  }
}
</script>

<style scoped>
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
  padding: 30px 0;
}

.auth-bottom {
  color: #555;
  font-size: 12px;
  margin-top: 30px;
  text-align: center;
}

.auth-bottom p {
  margin-block-end: 5px;
  margin-block-start: 5px;
}

.auth-bottom a {
  text-decoration: none;
}
</style>
