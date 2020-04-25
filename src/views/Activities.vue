<template>
    <div>
        <h1>Ini aktivitas saya</h1>
        <input class="inputNewTodo" v-model="newTodo" type="text" placeholder="Tulis aktivitas kamu">
        <button @click="addTodo">Add Todo</button>
        <button @click="allDone">Add Todo Done</button>
        <h2>{{title}} {{doneTodos}}</h2>
        <ul>
            <li v-for="(todo, index) in todos"
            :key="index">
            <span :class="{done: todo.done}">{{todo.title}}</span>
            <input type="checkbox" @click="toggleTodoDone(index)" :checked="todo.done">
            <button @click="deleteTodo(index)">X</button>
            <button @click="editTodo(index)">Edit</button>
            </li>
        </ul>
        <h2>{{greeting}}</h2>
        <input type="text" v-model="greeting">
    </div>
</template>

<script>
import {mapGetters, mapActions, mapMutations} from "vuex"
export default {
    data: () => {
        return {
            greeting: "hello, guys"
        }
    },
   computed: {
       ...mapGetters(["title", "todos", "doneTodos"]),
       newTodo:{
           get(){
               return this.$store.state.newTodo;
           },
        // ...mapGetters(["newTodo"]),
           set(value){
               this.$store.commit("setNewTodo", value);
           }
       }
   },
   methods: {
       allDone(){
           this.$store.commit("allDone")
       },
       deleteTodo(index){
           this.$store.commit("deleteTodo", index)
       },
       ...mapMutations(["allDone"]),
       ...mapActions(["addTodo", "toggleTodoDone"])
   } 
}
</script>

<style scoped>
ul {
    display: inline-block;
}
.inputNewTodo {
    margin-left: 5px;
}
button{
    margin-left: 5px;
}
.done{
    text-decoration: line-through;
}
</style>