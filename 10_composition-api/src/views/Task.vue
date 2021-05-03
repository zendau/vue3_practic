<template>
  <div class="card" v-if="err">
    <h2>{{task.name}}</h2>
    <p><strong>Статус</strong>: <AppStatus :type="task.status" /></p>
    <p><strong>Дэдлайн</strong>: {{task.deadline}}</p>
    <p><strong>Описание</strong>: {{task.desk}}</p>
    <div>
      <button @click="changeStatus(task.id, 'pending')" class="btn">Взять в работу</button>
      <button @click="changeStatus(task.id, 'done')" class="btn primary">Завершить</button>
      <button @click="changeStatus(task.id, 'cancelled')" class="btn danger">Отменить</button>
    </div>
  </div>
  <h3 class="text-white center" v-else>
    Задачи с id = {{$route.params.id}} нет.
  </h3>
</template>

<script>
import AppStatus from '../components/AppStatus'

import {useRoute,} from "vue-router"
import { onMounted, reactive, ref } from 'vue'
import {useStore} from "vuex"


export default {
  components: {AppStatus},
  setup() {

    const route = useRoute()
    //const router = useRouter()
    const store = useStore()

    const task = reactive({})

    const err = ref(false)

    function changeStatus(id, status) {
      store.commit("changeStatus", [id, status])
      task.status = status
    }

    onMounted(()=>{


      // Get data from server and put in reactive task constant
      const data = store.getters.getTasks.find((item) => item.id+"" === route.params.id)

      // check is there data or not, if not on err var
      if (data === -1 || data === undefined) {
        err.value = false
      } else {
        err.value = true
        Object.keys(data).forEach(item => {
        task[item] = data[item]
      })
      }
  
    })

    return {
      task,
      err,
      changeStatus
    }
  }
}
</script>

<style scoped>

</style>