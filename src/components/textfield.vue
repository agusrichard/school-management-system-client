<template>
  <v-text-field
    outlined
    :type="type"
    :label="label"
    class="textfield"
    :placeholder="placeholder"
    @input="change"
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

<style scoped>
.textfield {
  width: 350px;
}

div.v-input__slot {
  background: white !important;
}
</style>
