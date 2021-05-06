<template>
  <Layout>
    <Alert :isShow="showAlert"
      message="Success to register. Please check your email to validate your account!"
    />
    <div class="form-container">
      <AuthForm formTitle='Register' @submit="submit" :isRegister="true" />
    </div>
  </Layout>
</template>

<script>
export default {

}
</script>

<style>

</style>
