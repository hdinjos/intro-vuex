import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    result: {},
    count: 0,
    title: "SuperTodos",
    todos: [
      {
        title: "lari pagi",
        done: false
      },
      {
        title: "makan",
        done: true
      }
    ],
    newTodo: ""
  },
  mutations: {
    fetch(state, payload) {
      state.result = payload;
    },
    increment(state, payload) {
      state.count += payload.amount;
    },
    setNewTodo(state, value){
      state.newTodo = value;
    },
    addTodo(state){
      state.todos.push({
        title: state.newTodo,
        done: false
      })
    }
  },
  getters: {
    result: state => state.result,
    count: state => state.count,
    title: state => state.title,
    todos: state => state.todos
  },
  actions: {},
  modules: {}
});
