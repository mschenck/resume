<script setup>
import Bio from './Bio.vue'
import Experience from './Experience.vue'
import Skills from './Skills.vue'

defineProps({
  data: {
    type: Object,
    required: true
  }
})
</script>

<template>
    <div id="sidePane">
        <Bio :metadata=data.metadata />

        <Experience :experience=data.experience />

        <Skills :skills=data.skills />
    </div>

</template>