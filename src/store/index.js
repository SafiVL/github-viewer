import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    history:[]
  },
  getters: {
    history: (state) => state.history
  },
  mutations: {
    'ADD_HISTORY': (state, value) => {
     state.history.push(value)
     state.history = state.history.reverse().filter((value, index, self) => self.indexOf(value) === index).reverse()     
    }
  },
  actions:{},
  modules:{},
  plugins: [createPersistedState()]
  })

  export default store