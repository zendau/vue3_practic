export default {
    namespaced: true,
    state: {
        login: "test"
    },
    getters: {
        getRoot(state, getters, rootState) {
            console.log(rootState)
        }
    }
}