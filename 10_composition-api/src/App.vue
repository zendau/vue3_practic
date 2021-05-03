<template>
  <the-navbar></the-navbar>
  <div class="container with-nav">
    <router-view />
  </div>
</template>

<script>
import { onMounted } from 'vue'
import {useStore} from "vuex"
import TheNavbar from './components/TheNavbar'

export default {
  components: {
    TheNavbar
  },
  setup() {

    const store = useStore()

    onMounted(()=> {
      store.dispatch("loadTasks")
    })
  }
}
</script>

<style>

</style>
