<template>
  <div v-if="time !== null">{{time}}</div>
  <div v-else>load</div>
</template>

<script>
export default {
    data() {
        return {
            time: null
        }
    },
    mounted() {
        setInterval(()=>{
            var d = new Date()
            this.time = d.getHours()+":"+d.getMinutes()+":"+d.getSeconds() 
        }, 1000)
    }
}
</script>