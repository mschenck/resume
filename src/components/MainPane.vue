<script setup>
import Header from './Header.vue'
import Accomplishments from './Accomplishments.vue'

defineProps({
  data: {
    type: Object,
    required: true
  }
})
</script>

<template>
    <div id="mainPane">
        <Header :metadata=data.metadata />

        <Accomplishments :accomplishments=data.accomplishments />
    </div>
</template>