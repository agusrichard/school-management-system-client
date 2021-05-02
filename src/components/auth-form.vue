<template>
  <form>
    <h1>{{formTitle}}</h1>
    <div class="textfield-container">
      <TextField label='Email' placeholder='Your Email' />
      <TextField label='Password' placeholder='Your Password' />
    </div>
    <Button :title='formTitle' />
  </form>
</template>

<script>
import Button from './button'
import TextField from './textfield'

export default {
  components: { TextField, Button },
  props: ['formTitle']
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
