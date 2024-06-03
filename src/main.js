import './assets/main.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import { createApp } from 'vue'
import App from './ResumeApp.vue'
import YAML from 'yaml'

let data = {}
fetch('./resume.yml')
    .then((response) => response.text())
    .then((resumeResp) => {
        data = YAML.parse(resumeResp)
        createApp(App, {data: data}).mount('#app')
    })

