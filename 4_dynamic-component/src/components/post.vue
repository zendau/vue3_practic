<template>
  <div :style="{
      color
  }">{{text}}</div>
</template>

<script>
export default {
    data() {
        return {
            text: "some text",
            color: "#000"
        }
    },
    mounted() {
        setInterval(()=>{
            this.text = this.text.split("").reverse().join("")
        }, 1000)
    },
    methods: {
        randomColor() {
            this.color = "#"+Math.floor(Math.random()*16777215).toString(16)
        }
    },
}
</script>

<style>

</style>