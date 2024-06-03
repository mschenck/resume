<script setup>
import SidePane from './SidePane.vue'
import MainPane from './MainPane.vue'

// const resumeData = defineModel()

defineProps({
  data: {
    type: Object,
    required: true
  }
})
</script>


<template>

    <SidePane :data=data />

    <MainPane :data=data />

</template>