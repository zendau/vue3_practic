<template>
  <div>
    <the-navbar v-if="navStatus"></the-navbar>
    <component :is=CheckLayout></component>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

import {useRoute} from "vue-router"
import {useStore} from "vuex"

import theNavbar from "./components/theNavbar.vue"

import authLayout from "./layouts/auth.layout.vue"
import mainLayout from "./layouts/main.layout.vue"

export default defineComponent({
  setup() {

      const route = useRoute()
      //const router = useRouter()

      const store = useStore()


      const CheckLayout =  computed(() => {
        return route.meta.layout + "Layout"
      })

        return {
          CheckLayout,
          navStatus: computed(() => store.getters['auth/userStatus']) 
        }
  },
  components: {
    theNavbar,
    authLayout,
    mainLayout
  }

})
</script>


<style lang="scss">
</style>

