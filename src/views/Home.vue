<template>
  <div class="home mt-md-15" style="min-height: 80vh">
    <div>
      <carousel></carousel>
    </div>
    <div class="d-flex justify-center my-10 text-center">

    </div>
  </div>
</template>

<script>
// import auth from '../firebase/authentification'
// import { getDocs } from 'firebase/firestore'
// import userCollection from '../firebase/firestore'

import Carousel from '../components/Carousel.vue'
export default {
  name: 'Home',
  components:{
    Carousel,
  },
  methods: {
    
  },
}
</script>
