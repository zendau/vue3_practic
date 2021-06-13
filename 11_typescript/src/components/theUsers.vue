<template>
  <ul class="list">
    <li class="list-item" v-for="u in users" :key="u.id">
      {{u.name}}
    </li>
  </ul>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {useUsers} from '../use/users'
import { useStore } from 'vuex'

export default defineComponent({
  async setup() {
    const {users} = await useUsers()

    const store = useStore()

    console.log(store)

    return {
      users
      }
  }
})
</script>