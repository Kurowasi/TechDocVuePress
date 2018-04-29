import Vuex from 'vuex'
import firebase from 'firebase'
import Vue from 'vue'
import VueMarkdown from 'vue-markdown'

Vue.use(VueMarkdown)

const config = {
  apiKey: "Key",
  authDomain: "Domain"
}

if (!firebase.apps.length) {
  const firebaseApp = firebase.initializeApp(config)
}

const store = () => new Vuex.Store({
  state: {
    loggedIn: false
  },
  actions: {
    setLoggedIn ({ commit }, payload) {
      commit('setLoggedIn', payload)
    }
  },
  mutations: {
    setLoggedIn (state, payload) {
      state.loggedIn = payload
    } 
  },
  getters: {
    loggedIn (state) {
      return state.loggedIn
    } 
  }
})

export default store