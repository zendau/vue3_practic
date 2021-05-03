<template>
  <h1 v-if="tasks.length === 0" class="text-white center">Задач пока нет</h1>
  <template v-else>
    <h3 class="text-white">Всего активных задач: {{active}}</h3>
    <div class="card" v-for="item in tasks" :key="item.id">
      <h2 class="card-title">
        {{item.name}}
        <AppStatus :type="item.status" />
      </h2>
      <p>
        <strong>
          <small>
            {{item.deadline}}
          </small>
        </strong>
      </p>
      <button @click="$router.push('/task/'+item.id)" class="btn primary">Посмотреть</button>
    </div>
  </template>
</template>

<script>
import AppStatus from '../components/AppStatus'

import {useStore} from "vuex"
import { computed, onMounted, reactive } from 'vue'

export default {
  components: {AppStatus},
  setup() {

    const store = useStore()
    const tasks = reactive([])

    const active = computed(()=>{
      let count = 0

      tasks.forEach(item => item.status === "active" ? count ++ : "")

      return count
    })

    onMounted(()=>{
      store.getters.getTasks.forEach(item => {
        tasks.push(item)
      })
      console.log("Get", tasks)
    })

    return {
      tasks,
      active
    }
  }
}
</script>
