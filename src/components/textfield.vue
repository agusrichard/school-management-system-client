<template>
  <v-text-field
    outlined
    :label="label"
    class="textfield"
    :placeholder="placeholder"
  ></v-text-field>
</template>

<script>
export default {
  props: ['label', 'placeholder']
}
</script>

<style>
.textfield {
  width: 350px;
}
</style>
