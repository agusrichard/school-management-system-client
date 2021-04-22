<template>
  <div class="container">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
div.container {
  width: 100%;
  height: 100%;
}

div.content {
  margin: auto;
  height: 100%;
  max-width: 1200px;
}
</style>
