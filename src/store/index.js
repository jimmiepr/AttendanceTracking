import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    username: ""
  },
  mutations: {
    SET_LOGGED_IN(state) {
      state.isLogin = true;
    },
    SET_LOGGED_OUT(state) {
      state.isLogin = false;
    },
    SET_USERNAME(state, payload) {
      state.username = payload;
    }
  },
  getters: {
    GET_IS_LOGIN(state) {
      return state.isLogin;
    },
    GET_USERNAME(state) {
      return state.username;
    }
  },
  actions: {
    DO_LOGIN({ commit, dispatch }, { username, password }) {
      if (username && password) {
        commit("SET_LOGGED_IN");
        commit("SET_USERNAME", username);
      } else {
        dispatch("DO_LOGOUT");
      }
    },
    DO_LOGOUT({ commit }) {
      commit("SET_LOGGED_OUT");
      commit("SET_USERNAME", "");
    }
  },
  modules: {
  }
})
