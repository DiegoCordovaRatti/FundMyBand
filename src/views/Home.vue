<template>
  <div class="home mt-md-15" style="min-height: 80vh">
    <v-row style="width: 100%">
      <carousel></carousel>
    </v-row>

    <v-row class="d-flex justify-center align-center text-center mb-10" style="min-height: 80vh">
      <fund-my-band></fund-my-band>
    </v-row>

    <v-row style="min-height: 80vh">
      <v-row class="d-flex justify-center align-end text-center" style="width: 100%">
        <v-title class="mx-auto text-h4"><strong>Conoce las bandas más reconocidas de nuestra comunidad</strong>
        </v-title>
      </v-row>
  
      <v-row class="d-flex justify-center align-center mx-sm-5" style="width: 100%">
        <v-col v-for="n in 4" :key="n" class="col-sm-6 col-md-2 mx-5 pa-0">
          <v-card class="bandCard">
            <v-card :to="`/banda/${newArray[n-1].index}/${newArray[n-1].view}`" style="height: 85%">
              <v-img :src="newArray[n-1].imgSrc" class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="200px">
                <v-card-title v-text="newArray[n-1].title"></v-card-title>
              </v-img>
  
              <v-card-text class="d-flex align-center" style="height: 150px">
                <div>{{newArray[n-1].text}}</div>
              </v-card-text>
              <v-card-text class="d-flex align-center">
                <div><strong>Likes: </strong>{{newArray[n-1].likes}}</div>
              </v-card-text>
            </v-card>
          </v-card>
        </v-col>
      </v-row>
    </v-row>
    <v-row>
      <v-col>
        <user-liked-bands></user-liked-bands>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { getDocs } from 'firebase/firestore'
import bandasCollection from '../firebase/bandasFirestore'
import UserLikedBands from '../components/UserLikedBands.vue'
import Carousel from '../components/Carousel.vue'
import FundMyBand from '../components/FundMyBand.vue'
export default {
  name: 'Home',
    data() {
      return {
        cards: null,
        newArray: null,
      }
    },
    components: {
      Carousel,
      UserLikedBands,
        FundMyBand
    },
    methods: {
      async getLikes() {
        const myArray = []
        const bandsSnapshot = await getDocs(bandasCollection)
        bandsSnapshot.docs.forEach(bandDoc => {
          let bandasFilter = this.cards.filter(band => {
            return band.title.includes(bandDoc.data().banda)
          })
          if (bandDoc.data().likes !== undefined) {
            bandasFilter[0].likes = bandDoc.data().likes
          }
          myArray.push(bandasFilter[0])
        })
        myArray.sort((a, b) =>{
          return b.likes - a.likes
        })
        this.newArray = myArray
      },
      
      
    },
    computed: {
      getBandas() {
        let bands = this.$store.state.bandas
        return bands
      },
    },
    created() {
      this.cards = this.getBandas
      this.getLikes()
      this.newArray.sort((a, b) => {
        return b.likes - a.likes
      })
      this.getUserLikes()
      

    },
  }
</script>
<style scoped>
  .bands-card{
        background:url('https://cdn.pixabay.com/photo/2019/07/16/08/10/white-4341307_1280.jpg');
    }
</style>