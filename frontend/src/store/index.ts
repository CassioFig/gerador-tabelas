import { createStore } from 'vuex'

export default createStore({
  state: {
    games: []
  },
  mutations: {
    setGames(state, games) {
      state.games = games;
    }
  },
  actions: {
  },
  modules: {
  }
})
