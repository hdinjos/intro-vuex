<template>
    <div>
        <h1>Ini aktivitas saya</h1>
        <input class="inputNewTodo" v-model="newTodo" type="text" placeholder="Tulis aktivitas kamu">
        <button @click="addTodo">Add Todo</button>
        <button>Add Todo Done</button>
        <h2>{{title}} {{doneTodos}}</h2>
        <ul>
            <li v-for="todo in todos"
            :key="todo.title">
            {{todo.title}}
            <input type="checkbox">
            </li>
        </ul>
        <h2>{{greeting}}</h2>
        <input type="text" v-model="greeting">
    </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex"
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
    //    ...mapMutations(["addTodo"]),
       ...mapActions(["addTodo"])
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
</style>