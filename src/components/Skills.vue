<script setup>
defineProps({
  skills: {
    type: Object,
    required: true
  }
})

function topicGroup(topics) {
    return topics.join(', ')
}
</script>

<template>
    <div id="skills">
        <h2>{{  skills.title }}</h2>
        <ul class="skills">
            <li v-for="skill in skills.entries">
                <span class="listHighlight">{{ skill.domain }}</span>
                <br/>
                {{ topicGroup(skill.topics) }}
            </li>
        </ul>
    </div>
</template>