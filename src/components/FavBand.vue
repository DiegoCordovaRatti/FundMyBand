<template lang="">
  <v-row class="d-flex mb-10" style="width: 100%">
    <v-col cols="12">
      <v-title class="text-h4 mb-10"><strong>Los favoritos de nuestra comunidad</strong>
      </v-title>
    </v-col>
    <!-- Renders the 4 most liked bands -->
    <v-col v-for="n in 4" :key="n" class="col-12 col-sm-6 py-5 my-sm-5">
      <!-- redirects to certain band view -->
      <v-card :to="`/banda/${bandsArray[n-1].index}/${bandsArray[n-1].view}`" style="height: 450px">
        <v-img :src="bandsArray[n-1].imgSrc" class="white--text align-end"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="200px">
        <v-card-title v-text="bandsArray[n-1].title"></v-card-title>
      </v-img>
      <v-card-text>
        <div class="d-flex align-center" style="height: 150px">{{bandsArray[n-1].text}}</div>
        <div class="d-flex align-center justify-center" style="height: 70px"><strong>Likes:
            <!-- renders the number of likes certain band has got -->
            </strong>{{bandsArray[n-1].likes}}</div>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
  import {getDocs} from 'firebase/firestore'
  import bandasCollection from '../firebase/bandasFirestore'
  export default {
    data() {
      return {
        cards: null,
        bandsArray: null,
      }
    },
    methods: {
      // creates an array from the database with every band and sorts it
      async getLikes() {
        const likedBands = []
        const bandsSnapshot = await getDocs(bandasCollection)
        bandsSnapshot.docs.forEach(bandDoc => {
          let bandasFilter = this.cards.filter(band => {
            return band.title.includes(bandDoc.data().banda)
          })
          if (bandDoc.data().likes !== undefined) {
            bandasFilter[0].likes = bandDoc.data().likes
          }
          likedBands.push(bandasFilter[0])
        })
        likedBands.sort((a, b) => {
          return b.likes - a.likes
        })
        this.bandsArray = likedBands
      },
    },
    computed: {
      getBandas() {
        return this.$store.state.bandas
      },
    },
    created() {
      this.cards = this.getBandas
      this.getLikes()
      this.bandsArray.sort((a, b) => {
        return b.likes - a.likes
      })
      this.getUserLikes()
    },
  }
</script>