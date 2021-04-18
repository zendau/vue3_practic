<template>
  <div id="app">
    <register @addData="add"></register>
    <list :users="userData"></list>
  </div>
</template>

<script>

import list from "./components/list"
import register from "./components/register"



export default {
  data() {
    return {
      userData: []
    }
  },
  name: 'App',
  components: {
    list, 
    register
  },
  methods: {
    add(data) {
      this.userData.unshift(data)
      console.log(this.userData)
    }
  }
  
}
</script>

<style>
  * {
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
  }
</style>
