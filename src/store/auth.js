const authModule = {
  namespaced: true,
  state: {
    isLoggedIn: false
  },
  mutations: {
    setLogin (state, status) {
      console.log('im login bruh', status)
      state.isLoggedIn = status
    }
  },
  actions: {
    setLogin ({ commit }, payload) {
      commit('setLogin', payload.status)
    }
  },
  modules: {
  }
}

export default authModule
