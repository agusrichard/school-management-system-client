<template>
  <v-text-field
    outlined
    :type="type"
    :label="label"
    class="textfield"
    @input="change"
    :placeholder="placeholder"
  ></v-text-field>
</template>

<script>
export default {
  props: ['label', 'placeholder', 'type'],
  methods: {
    change (text) {
      this.$emit('input', text)
    }
  }
}
</script>

<style>
.textfield {
  width: 350px;
}

.v-text-field--outlined > .v-input__control > .v-input__slot {
  background: white !important;
}
</style>
