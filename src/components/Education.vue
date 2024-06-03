<script setup>
defineProps({
    education: {
    type: Object,
    required: true
  }
})

function specializations(specializations) {
    return specializations.join(', ')
}
</script>

<template>
    <div id="education">
        <h2>Education</h2>
        <span class="listHighlight">
            {{ education.school }}
        </span>
        ({{ education.url }})
        <br/>
        <span class="listHighlight">
            {{ education.degree }}
        </span>
        <br/>

        {{ specializations(education.entries) }}
    </div>
</template>