<template>
  <div class="home mt-md-15">
    <div>
      <carousel></carousel>
    </div>
    <div class="d-flex justify-center my-10 text-center">
      <cards></cards>
    </div>
  </div>
</template>

<script>
import Cards from '../components/Cards.vue'
import Carousel from '../components/Carousel.vue'
export default {
  name: 'Home',
  components:{
    Carousel,
    Cards
  }
}
</script>
