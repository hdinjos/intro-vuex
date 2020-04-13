<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="increment">Hitung</button>
    <p>{{count}}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      pesan: "test props"
    };
  },
  methods: {
    increment() {
      this.$store.commit({
        type: "increment",
        amount: 2
      });
    }
  },
  computed: {
    ...mapGetters(["count"])
  }
};
</script>
