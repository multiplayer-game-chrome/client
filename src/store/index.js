import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    boardLength: 9,
    mark: 'Z',
    board: [],
    playerId: 0
  },
  mutations: {
    SET_BOARD (state, payload) {
      state.board = payload
    },
    SET_PLAYER_ID (state, payload) {
      state.playerId = payload
      if (payload === 1) {
        state.mark = 'X'
      } else if (payload === 2) {
        state.mark = 'O'
      }
    }
  },
  actions: {},
  modules: {}
})
