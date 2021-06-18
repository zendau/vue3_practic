<template>
    <suspense>
        <template #default>
            <div>
                <div v-if="data !== undefined" >
                    <p>Id - {{data.id}}</p>
                    <p>Name - {{data.name}}</p>
                    <p>Phone - {{data.phone}}</p>
                    <p>Sum - {{data.sum}}</p>
                    <select name="" id="" v-model="userStatus">
                        <option value="Active">Active</option>
                        <option value="Completed">Completed</option>
                        <option value="Canceled">Canceled</option>
                        <option value="In progress">In progress</option>
                    </select>
                    <button @click="changeStatus">Save</button>
                    <button @click="deleteUser">Delete</button>
                </div>
                <div v-else>
                    <p>Id {{id}} not found</p>
                </div>
            </div>

        </template>
        <template #fallback>
            Loading...
        </template>
    </suspense>
</template>

<script lang="ts">
import {defineComponent, onMounted, ref } from 'vue'
import {useRoute, useRouter} from "vue-router"
import {useStore} from "vuex"

export default defineComponent({
    setup() {

        const route = useRoute()
        const store = useStore()    
        const router = useRouter()

        const id = ref()

        const data = ref()

        const userStatus = ref()


            
        id.value = route.params.id

        onMounted(async () => {

            if (typeof id.value === 'string') {

                store.commit("requests/selectOneRequest", id.value)
                data.value = await store.getters['requests/oneRequest']

                userStatus.value = data.value.status
        
            }
        })

        

        function changeStatus() {
            store.dispatch("requests/changeUserStatus", {id: id.value, status: userStatus.value})
        }

        function deleteUser() {
            store.dispatch("requests/deleteUser", id.value)
            router.push("/requests")
        }

            
  

        return {
            id,
            data,
            userStatus,
            changeStatus,
            deleteUser
        }
    },
})
</script>


<style>

</style>