<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="fetch">Tampilkan Nama</button>
    <p>{{result.name}}</p>
    <!-- merupakan hasil data yang diambil dengan mapGetters, dapat dipanggil disini-->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  methods: {
    async fetch() {
      const res = await fetch("https://api.agify.io/?name=michael"); //ambil data di url/api
      const result = await res.json(); //ubah ke json diisi ke variabel result
      this.$store.commit("fetch", result); //kirim data/variabel result ke state di vuex dengan fungsi fetch di mutation karena untuk mengubah state yang semula kosong menjadi bernilai
      //commit merupakan fungsi untuk mengirim data ke state lewat mutation di vuex, fungsi ini punya dua parameter yaitu fungsi di mutation (bernilai string) dan payload data yang akan dikirim (berbentuk variable)
    }
  },
  computed: {
    ...mapGetters(["result"]) //mengambil data di state vuex lewat fungsi getters atau juga bisa memakai state langsung. data ini akan dikirim ke sebuah element di komponent
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */
</style>
