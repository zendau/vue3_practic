import { createApp } from 'vue'
import App from './App.vue'

import pin from "./directives/pin"

import i18n from "./plugins/i18n"

createApp(App)
.directive("pin", pin)
.use(i18n)
.mount('#app')
