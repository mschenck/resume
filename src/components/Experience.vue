<script setup>
defineProps({
  experience: {
    type: Object,
    required: true
  }
})

function dateFmt(dateStr) {
  let date = new Date(dateStr);
  return (date.getMonth() + 1) + "/" + date.getFullYear();
}

function durEnd(dateStr) {
  if (!(dateStr)) {
    return "present"
  }
  return dateFmt(dateStr)
}
</script>

<template>
    <div id="experience">
        <h2>{{ experience.title }}</h2>

        <ul class="experience">
          <li v-for="position in experience.entries">
              <span class="listHighlight">{{ position.name }}</span>
               ({{  position.url }})
              <br/>
              <div class="duration">
                {{ dateFmt(position.duration.start) }} - {{ durEnd(position.duration.end) }}
              </div>
          </li>
      </ul>
    </div>
</template>