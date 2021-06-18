<template>
   <form @submit.prevent="onSubmit">
        <p><input type="text" placeholder="Name" v-model="vName"></p>
        <p>{{eName}}</p>
        <p><input type="text" placeholder="Phone" @input="inputNumber" v-model="vPhone"></p>
        <p>{{ePhone}}</p> 
        <p><input type="number" placeholder="Sum" v-model="vSum"></p> 
        <p>{{eSum}}</p>
        <select name="" id="" v-model="vStatus">
            <option value="Active">Active</option>
            <option value="Completed">Completed</option>
            <option value="Canceled">Canceled</option>
            <option value="In progress">In progress</option>
        </select>
        <button type="submit">Add</button>
   </form>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'

import {useStore} from "vuex"

import addRef from "@/use/addReq.form"

export default defineComponent({
    setup() {

        const store = useStore()

        onMounted(() => {
            store.dispatch("requests/getRequests")
        })

        return {
            ...addRef(store)
        }
    },
})
</script>

<style lang="scss">

</style>