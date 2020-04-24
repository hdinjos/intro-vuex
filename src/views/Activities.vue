<template>
    <div>
        <h1>Ini aktivitas saya</h1>
        <input v-model="newTodo" type="text" placeholder="Tulis aktivitas kamu">
        <button @click="addTodo">Kirim</button>
        <h2>{{title}}</h2>
        <ul>
            <li v-for="todo in todos" :key="todo.title">{{todo.title}}</li>
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
       ...mapGetters(["title", "todos"]),
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
       ...mapActions(["addTodo"])
   } 
}
</script>

<style scoped>
ul {
    display: inline-block;
}
</style>