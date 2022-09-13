<template>
  <v-app>
    <div >
      <nav-bar></nav-bar>
      <router-view id="app"></router-view>
      <band-footer></band-footer>
    </div>
  </v-app>
</template>

<script>
import BandFooter from './components/BandFooter.vue';
import NavBar from './components/NavBar.vue';
import {doc, updateDoc} from 'firebase/firestore'
import bandasCollection from './firebase/bandasFirestore'

  export default {
    name: 'App',
    components:{ NavBar, BandFooter },
    data() {
      return {
      }
    },
    methods:{

    },
    async created() {
      let bandas = this.$store.state.bandas
      await bandas.forEach(banda => {
        updateDoc(doc(bandasCollection, banda.title),{
          banda: banda.title
        })
      });
      
    },
  };
</script>

<style>
  *{
    font-family: 'Josefin Sans', sans-serif;
  }
  #app, #signIn, #signUp{
    /* background: url('https://static.vecteezy.com/system/resources/previews/000/258/929/large_2x/vector-beautiful-dark-green-texture-background.jpg'); */
    background: url('./assets/concert.jpg');
    background-size: cover;
    background-position: center;
    height: auto;
    background-attachment: fixed;
    color: white
  }
</style>