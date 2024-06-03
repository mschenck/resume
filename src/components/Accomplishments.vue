<script setup>
defineProps({
  accomplishments: {
    type: Object,
    required: true
  }
})
</script>

<template>
    <div id="accomplishments">
        <h2>{{ accomplishments.title }}</h2>
        
        <li v-for="accomplishment in accomplishments.entries">
            {{ accomplishment }}
        </li>
    </div>
</template>