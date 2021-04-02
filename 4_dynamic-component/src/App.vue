<template>
  <div id="app">
    <div class="container flex">
      <div class="group">
         <button 
          class="btn btn-primary" 
          @click="changeColor">
          Post</button>
        <button 
          class="btn btn-primary" 
          @click="type = 'time'">
          Time</button>
      </div>
      <keep-alive>
        <component class="card"  ref="dinamic" :is="switchComponent"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>

import post from "./components/post"
import timer from "./components/timer"

export default {
  name: 'App',
  components: {
    post, 
    timer,
    },
  computed: {
    switchComponent() {
      return this.type === "post" ? post: timer
    }
  },
  data() {
    return {
      type: "post"
    }
  },
  methods: {
    changeColor() {
      this.type = 'post'

      if (this.$refs.dinamic.randomColor !== undefined) {
        this.$refs.dinamic.randomColor()
      }      
    }
  }

}
</script>

<style>
  .flex {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 35px;
  }
 

  .group {
    display: flex;
    justify-content: space-between;
    min-width: 150px;
  }
  
  .card {
    min-width: 150px;
    margin-top: 10px;
    font-size: 20px;
  }
</style>
