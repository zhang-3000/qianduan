import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin : false
  },
  getters: {
  },
  mutations: {
    login(state,isLogin){
      state.isLogin=true
    },

    logout(state,isLogin){
      state.isLogin=false
    }
  },
  actions: {
  },
  modules: {
  }
})
