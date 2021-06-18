<template>
  <div>
      <form @submit.prevent="onSubmit">
          <input type="text" placeholder="login" v-model="vLogin">
          <div>{{eLogin}}</div> 
          <input type="text" placeholder="pass" v-model="vPass">
          <div>{{ePass}}</div>
          <button>Login</button>
      </form>
      <teleport to="body">
          <message v-if="showModal" :title=title :typeClass=type></message>
      </teleport>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import {useRoute, useRouter} from "vue-router"
import {useStore} from "vuex"

import loginForm from "../use/login.form"
import message from "./ui/message.modal.vue"

export default defineComponent({
    components: {
        message
    },
    setup() {

        const route = useRoute()
        const router = useRouter()
        const store = useStore()

        const title = ref("")
        const type = ref("")
        const showModal = ref(false)

        onMounted(() => {
            if(route.query.error) {
                title.value = "Error"
                type.value = "danger"
                showModal.value = true

                setTimeout(() => showModal.value = false, 5000)
            }
        })

        return {
            ...loginForm(store, router),
            title,
            type,
            showModal
        }
    },
})
</script>


<style>

</style>