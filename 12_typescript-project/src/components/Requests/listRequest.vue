<template>
    <req-filter @filterData="filter"></req-filter>
    <table table v-if="reqs.length > 0">
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Sum</th>
                <th>Status</th>
            </tr>
            <tr v-for="item in reqs" :key="item.id">
                <td>{{item.id}}</td>
                <td>{{item.name}}</td>
                <td>{{item.phone}}</td>
                <td>{{item.sum}}</td>
                <td>{{item.status}}</td>
                <router-link :to="{path : '/req/'+item.id}">Open request</router-link>
            </tr>
    </table>
    <p v-else>No requests</p>
</template>

<script lang="ts">
import { computed, defineComponent, ref} from 'vue'

import {useStore} from "vuex"

import reqFilter from "./reqFilter.vue"

export default defineComponent({
    components: {
        reqFilter
    },
    setup() {

         const store = useStore()

         const filterData = ref<string[]>([])

         const reqs = computed(() => store.getters['requests/getReqs']
            .filter((item: { name: string} ) => {
                if (
                    filterData.value[0] === "" || 
                    filterData.value[0] === undefined || 
                    item.name.includes(filterData.value[0])) {
                    return item
                }
            })
            .filter((item: { status: string} ) => {
                if (
                    filterData.value[1] === "" || 
                    filterData.value[1] === undefined || 
                    item.status.includes(filterData.value[1])) {
                    return item
                }
            })
            )
         
         function filter(values: string[]) {
            
            filterData.value = values
             
         }


        return {
            reqs,
            filter
        }
        
    },
})
</script>


<style>

</style>