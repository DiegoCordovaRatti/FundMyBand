<template>
  <div class="home">
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
// @ is an alias to /src
import Carousel from '../components/Carousel.vue'
export default {
  name: 'Home',
  components:{
    Carousel,
    Cards
  }
}
</script>
