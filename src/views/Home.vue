<template>
  <div class="home mt-md-15">
    <v-row style="width: 100%">
      <!-- Renders Carousel component -->
      <carousel></carousel>
    </v-row>
    <v-row class="d-flex justify-center align-center text-center my-10" style="min-height: 80vh;">
      <!-- renders FundMyBand component & renders FavBands component through a boolean type prop -->
      <fund-my-band style="width: 80vw" :showFavBands="true"></fund-my-band>
    </v-row>
    <v-row>
      <v-col>
        <!-- renders UserLikedBands component -->
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
    components: {
      Carousel,
      UserLikedBands,
      FundMyBand,
    },
  }
</script>
