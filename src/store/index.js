import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    boardLength: 9,
    mark: 'X',
    board: [],
    winner: ''
  },
  mutations: {
    SET_BOARD (state, payload) {
      state.board = payload
    },
    SET_WINNER (state, payload) {
      state.winner = payload
    }
  },
  actions: {},
  modules: {}
})
