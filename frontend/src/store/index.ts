import { createStore } from 'vuex'

export default createStore({
  state: {
    games: [],
    teams: []
  },
  mutations: {
    setGames(state, games) {
      state.games = games;
    },
    
    setTeams(state, teams) {
      state.teams = teams;
    }
  },
  actions: {
  },
  modules: {
  }
})
