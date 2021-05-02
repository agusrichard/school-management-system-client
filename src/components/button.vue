<template>
  <v-btn
    :color="color"
  >
    {{ title }}
  </v-btn>
</template>

<script>
export default {
  props: ['color', 'title']
}
</script>

<style scoped>
.theme--light.v-btn {
  color: rgba(255, 255, 255, 0.87);
}
.theme--light.v-btn.v-btn--has-bg {
  background: var(--prussian-blue);
}
</style>
