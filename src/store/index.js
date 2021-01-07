import Vue from 'vue'
import Vuex from 'vuex'
import api from '../services/api';
import { server } from '../services/constants';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    isShowMenu: false,
    username: ""
  },
  mutations: {
    SET_SHOW_MENU(state){
      state.isShowMenu = true;
    },
    SET_HIND_MENU(state){
      state.isShowMenu = false;
    },
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
    GET_IS_SHOW_MENU(state){
      return state.isShowMenu;
    },
    GET_IS_LOGIN(state) {
      return state.isLogin;
    },
    GET_USERNAME(state) {
      return state.username;
    }
  },
  actions: {
    TOGGLE_MENU({ commit }){
      if (this.state.isShowMenu) {
        commit("SET_HIND_MENU");
      }else{
        commit("SET_SHOW_MENU");
      }
    },
    RESTORE_LOGIN({ commit }){
      let checkLogin = localStorage.getItem(server.TOKEN_KEY);
      if (checkLogin) {
        commit("SET_LOGGED_IN");
        commit("SET_USERNAME", checkLogin);
      }
    },
    async DO_LOGIN({ commit, dispatch }, { username, password }) {
      let result = await api.login({username, password})
      if (result) {
        commit("SET_LOGGED_IN");
        commit("SET_USERNAME", username);
      } else {
        dispatch("DO_LOGOUT");
      }
    },
    DO_LOGOUT({ commit }) {
      api.logoff();
      commit("SET_LOGGED_OUT");
      commit("SET_USERNAME", "");
    }
  },
  modules: {
  }
})
