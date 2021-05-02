<template>
  <div>
    <Navbar />
    <Container>
      <slot></slot>
    </Container>
  </div>
</template>

<script>
import Navbar from './navbar'
import Container from './container'

export default {
  components: { Navbar, Container }
}
</script>

<style>

</style>
