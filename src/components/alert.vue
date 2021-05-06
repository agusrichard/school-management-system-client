<template>
  <v-alert
    type="success"
    :value="isShow"
    transition="fade-transition"
    class="alert"
  >
    {{ message }}
  </v-alert>
</template>

<script>
export default {
  props: ['isShow', 'message']
}
</script>

<style>
.alert {
  top: 75px;
  left: 50%;
  width: 30%;
}

.v-alert {
  z-index: 99;
  position: absolute !important;
  transform: translate(-50%, 0);
}
</style>
