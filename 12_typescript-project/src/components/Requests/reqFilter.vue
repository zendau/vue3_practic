<template>
    <div>
        <input type="text" placeholder="name" v-model="nameVal">
        <select v-model="statusVal">
            <option value="Active">Active</option>
            <option value="Completed">Completed</option>
            <option value="Canceled">Canceled</option>
            <option value="In progress">In progress</option>
        </select>
        <button @click="reset">Reset</button>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'

export default defineComponent({
    setup(_, {emit}) {

        const nameVal = ref("")
        const statusVal = ref("")

        watch([nameVal, statusVal], (newValues) => {
            emit("filterData", newValues)
        })

        function reset() {
            nameVal.value = ""
            statusVal.value = ""
        }

        return {
            nameVal,
            statusVal,
            reset
        }
    },
})
</script>
