<template>
  <div>
    <h1>value {{count}}</h1>
    <button @click="inc">inc</button>
    <button @click="dec">dec</button>
    <button @click="incValue({
      timeOut: 2000,
      value: 10
    })">inc Value</button>
    <button @click="root">Root</button>
  </div>
</template>

<script>

import {mapGetters, mapMutations, mapActions} from "vuex"

export default {
  name: 'App',
  computed: {
    ...mapGetters({
      count: "getCount",
      root: "user/getRoot"
    })
  },
  mounted() {
    console.log(this)
  },
  methods: {
    ...mapMutations(['inc', 'dec']),
    ...mapActions(['incValue'])
  }
 
}
</script>

<style>

</style>
