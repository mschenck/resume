<script setup>
defineProps({
  metadata: {
    type: Object,
    required: true
  }
})
</script>

<template>
    <div id="mainHeader">
        <h1>{{ metadata.name }}</h1>
        {{ metadata.tagline }}
    </div>
</template>