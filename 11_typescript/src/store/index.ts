import { createStore } from 'vuex'

export default createStore({
  state: {
    test: 0
  },
  mutations: {
    testMut(state, arg) {
      state.test = arg
    }
  },
  actions: {
  },
  modules: {
  }
})
