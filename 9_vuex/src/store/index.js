import { createStore } from 'vuex'
import user from "./modules/user"

export default createStore({
  state: {
    count: 0
  },
  mutations: {
    inc(state, value) {
      console.log(value)
      if (typeof value === "number") {
        state.count+=value
      } else {
        state.count++ 
      }
    },
    dec(state) {
      state.count--
    }
  },
  actions: {
    incValue(ctx, data) {
      console.log("ctx", ctx)
      setTimeout(() => {
        ctx.commit("inc", data.value)
      }, data.timeOut)
    }
  },
  getters: {
    getCount(state) {
      if (state.count <= 0) return 0
      return state.count
    }

  },
  modules: {
    user
  }
})
