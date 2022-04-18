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

  export default {
    name: 'App',
    components:{ NavBar, BandFooter },
    methods:{

    },
  };
</script>

<style>
  #app, #signIn, #signUp{
    background: url('https://static.vecteezy.com/system/resources/previews/000/258/929/large_2x/vector-beautiful-dark-green-texture-background.jpg');
    background-size: cover;
    height: auto;
    background-attachment: fixed;
    color: white
  }
</style>