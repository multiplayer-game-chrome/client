import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    boardLength: 9,
    mark: 'X',
    username: null
  },
  mutations: {
    SET_USERNAME (state, payload) {
      state.username = payload
    }
  },
  actions: {},
  modules: {}
})
