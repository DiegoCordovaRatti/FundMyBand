<template>
  <div class="home mt-md-15" style="min-height: 80vh">
    <v-row style="width: 100%">
      <carousel></carousel>
    </v-row>

    <v-row class="d-flex justify-center align-center text-center mb-10" style="min-height: 80vh">
      <fund-my-band></fund-my-band>
    </v-row>

    <v-row>
      <v-col>
        <user-liked-bands></user-liked-bands>
      </v-col>
    </v-row>
  </div>
</template>

<script>

import UserLikedBands from '../components/UserLikedBands.vue'
import Carousel from '../components/Carousel.vue'
import FundMyBand from '../components/FundMyBand.vue'

export default {
  name: 'Home',
    data() {
      return {
        cards: null,
      }
    },
    components: {
      Carousel,
      UserLikedBands,
      FundMyBand,
    },
    methods: {
      
      
      
    },
    
    
  }
</script>
<style scoped>
  .bands-card{
        background:url('https://cdn.pixabay.com/photo/2019/07/16/08/10/white-4341307_1280.jpg');
    }
</style>