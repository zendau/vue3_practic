<template>
    <div>
        <router-link to="/requests">Requests</router-link>
        <a href="#" @click.prevent="exitUser">Exit</a>
    </div>
</template>

<script>

import {defineComponent} from "vue"

import {useStore} from "vuex"
import {useRouter} from "vue-router"

export default defineComponent({

    setup () {

        const store = useStore()
        const router = useRouter()

        function exitUser()  {
            store.dispatch("auth/authUser")
            router.push("/")
        }


        return {
            exitUser
        }
    }
})
</script>

<style>

</style>