import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    result: {},
    count: 0,
    title: "Daftar Todo: ",
    todos: [
      {
        title: "lari pagi",
        done: false
      },
      {
        title: "makan",
        done: false
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
    },
    allDone(state){
      state.todos.forEach((todo) => {
        todo.done = true
      })
    },
    setTodoDone(state, index){
      state.todos[index].done = true;
    },
    setTodoNotDone(state, index){
      state.todos[index].done = false;
    }
  },
  getters: {
    result: state => state.result,
    count: state => state.count,
    title: state => state.title,
    todos: state => state.todos,
    doneTodos: state => {
      let done = state.todos.filter((todo)=> todo.done === false);
      return done.length;
    }
  },
  actions: {
    addTodo(context){
      context.commit("addTodo")
      context.commit("setNewTodo", "")
    },
    toggleTodoDone(context, index){
      const todo = context.state.todos[index];
      if (todo.done){
        context.commit("setTodoNotDone", index);
      } else {
        context.commit("setTodoDone", index);
      }
    }
  },
  modules: {}
});
