<template>
  <form class="card">
    <h1>Создать новую задачу</h1>
    <div class="form-control">
      <label for="title">Название</label>
      <input v-model.trim="name" type="text" id="title">
    </div>

    <div class="form-control">
      <label for="date">Дата дэдлайна</label>
      <input v-model.trim="date" type="date" id="date">
    </div>

    <div class="form-control">
      <label for="description">Описание</label>
      <textarea v-model.trim="desk" id="description"></textarea>
    </div>

    <button @click.prevent="addTask" :disabled="checkValues" class="btn primary">Создать</button>
  </form>
</template>


<script>

import {ref, computed} from "vue"
import {useStore} from "vuex"
import {useRouter} from "vue-router"

export default {
  setup() {
    const name = ref("")
    const date = ref("")
    const desk = ref("")

    const checkValues = computed(()=>{
      if (name.value !== "" && date.value !== "" && desk.value !== "") {
        return false
      } else {
        return true
      }
    })

    const store = useStore()

    const router = useRouter()


    function addTask() {
      
      let status = "active"
      const mainDate = new Date(date.value)
      const dateUser = mainDate.getTime()
      const dateNow = new Date().getTime()

      if ((dateNow - dateUser) > 0) status = "done"
      console.log(dateUser, dateNow, (dateNow - dateUser))

      store.commit("addTasks", [name.value, 
        mainDate.getDate()+"."+mainDate.getMonth()+"."+mainDate.getFullYear(), 
        desk.value, status])
      router.push("/")
    }

    return {
      name,
      date,
      desk,
      addTask,
      checkValues
    }
  },
}

</script>