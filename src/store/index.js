import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    result: {}
  },
  mutations: {
    fetch(state, payload) {
      state.result = payload;
    }
  },
  getters: {
    result: state => state.result
  },
  actions: {},
  modules: {}
});
