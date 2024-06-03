<script setup>
import Bio from './Bio.vue'
import Experience from './Experience.vue'
import Skills from './Skills.vue'
import Education from './Education.vue'

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

        <Education :education=data.education />
    </div>

</template>