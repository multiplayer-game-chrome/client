import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    boardLength: 9,
    mark: 'Z',
    board: [],
    winner: '',
    playerId: 0,
    isActive: false,
    username: null
  },
  mutations: {
    SET_USERNAME (state, payload) {
      state.username = payload
    },
    SET_BOARD (state, payload) {
      state.board = payload
    },
    SET_WINNER (state, payload) {
      state.winner = payload
    },
    SET_PLAYER_ID (state, payload) {
      state.playerId = payload
      if (payload === 1) {
        state.mark = 'X'
      } else if (payload === 2) {
        state.mark = 'O'
      }
    },
    SET_IS_ACTIVE (state, payload) {
      state.isActive = payload
    }
  },
  actions: {},
  modules: {}
})
