import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    result: {},
    count: 0
  },
  mutations: {
    fetch(state, payload) {
      state.result = payload;
    },
    increment(state, payload) {
      state.count += payload.amount;
    }
  },
  getters: {
    result: state => state.result,
    count: state => state.count
  },
  actions: {},
  modules: {}
});
