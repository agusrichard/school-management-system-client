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
  </form>
</template>

<script>
import Button from './button'
import TextField from './textfield'

export default {
  props: ['formTitle', 'submit'],
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
  padding-bottom: 75px;
  background: #efefef;
  flex-direction: column;
}

h1 {
  font-size: 28px;
}

.textfield-container {
  padding: 30px 0;
}
</style>
