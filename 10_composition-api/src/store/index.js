import { createStore } from 'vuex'

export default createStore({
  state: {
    tasks: []
  },
  mutations: {
    addTasks(state, args) {
      state.tasks.push(taskData(args))
      
      const tasks = JSON.parse(localStorage.getItem("tasks"))
      if (tasks !== null) {
        tasks.push(taskData(args))
        localStorage.setItem("tasks", JSON.stringify(tasks))
      } else {
        localStorage.setItem("tasks", JSON.stringify([taskData(args)])) 
      }

    },
    changeStatus(state, args) {

      state.tasks = state.tasks.map(item => {
        if (item.id === args[0]) {
          item.status = args[1]
        }
        return item
      })
      localStorage.setItem("tasks", JSON.stringify(state.tasks))
    }
  },
  actions: {
    loadTasks(ctx) {

      const tasks = JSON.parse(localStorage.getItem("tasks"))

      if (tasks !== null) {
        ctx.state.tasks = tasks
      } else {
        ctx.state.tasks = []
      }

    }
  },
  getters: {
    getTasks(state) {
      return state.tasks
    }
  },
  modules: {
  }
})


function taskData(args) {
  return {
    id: Date.now(),
    name: args[0],
    deadline: args[1],
    desk: args[2],
    status: args[3]
  }
}