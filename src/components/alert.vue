<template>
  <v-alert
    dismissible
    :type="type"
    class="alert"
    @input="change"
    transition="fade-transition"
  >
    {{ message }}
  </v-alert>
</template>

<script>
export default {
  props: ['message', 'type'],
  methods: {
    change: function () {
      this.$emit('close')
    }
  }
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
