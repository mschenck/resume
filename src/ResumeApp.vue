<script setup>
import Main from './components/Main.vue'

defineProps({
  data: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <!-- {{ data }} -->
  <Main :data=data />
</template>

<style scoped>
</style>