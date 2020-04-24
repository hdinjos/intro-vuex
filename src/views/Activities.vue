<template>
    <div>
        <h1>Ini aktivitas saya</h1>
        <input type="text" placeholder="Tulis aktivitas kamu">
        <button>Kirim</button>
        <h2>{{title}}</h2>
        <ul>
            <li v-for="todo in todos" :key="todo">{{todo.title}}</li>
        </ul>
    </div>
</template>

<script>
import {mapGetters} from "vuex"
export default {
   computed: {
       ...mapGetters(["title", "todos"])
   } 
}
</script>