<script setup>
defineProps({
  metadata: {
    type: Object,
    required: true
  }
})

function phoneLink(phone) {
    return "tel:" + phone.replaceAll('-', '')
}

function phoneText(phone) {
    return phone.replace('1-', '')
}

function emailLink(email) {
    return "mailto:" + email
}

function webLink(link) {
    return "https://"+link
}
</script>

<template>
    <div id="bio">
        <div id="headShot">
            <img id="headShot" src="/Michael.png">
        </div>
        

        <div id="contact">
            <h2>Contact</h2>

            <a v-bind:href=emailLink(metadata.email) >
                {{ metadata.email }}
            </a>
            <i class="bi bi-envelope"></i>
            <br/>

            <a v-bind:href=phoneLink(metadata.phone) >
                {{ phoneText(metadata.phone) }}
            </a>
            <i class="bi bi-phone"></i>
            <br/>

            <a v-bind:href=webLink(metadata.github) >
                {{ metadata.github }}
            </a>
            <i class="bi bi-github"></i> 
            <br/>

            <a v-bind:href=webLink(metadata.linkedin) >
                {{ metadata.linkedin }}
            </a>
            <i class="bi bi-linkedin"></i>
            <br/>
        </div>
    </div>
</template>