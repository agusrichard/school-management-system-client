import Vue from 'vue'

const authModule = {
  namespaced: true,
  state: {
    isLoggedIn: false
  },
  mutations: {
    setLogin (state, payload) {
      if (payload.status === true) Vue.$cookies.set('access-token', payload.accessToken)
      else Vue.$cookies.remove('access-token')
      state.isLoggedIn = payload.status
    }
  },
  actions: {
    setLogin ({ commit }, payload) {
      commit('setLogin', payload)
    }
  }
}

export default authModule
