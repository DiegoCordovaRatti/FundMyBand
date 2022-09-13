<template lang="">
  <v-row class="d-flex mb-10" style="width: 100%">
    <v-col cols="12">
      <v-title class="text-h4 mb-10"><strong>Los favoritos de nuestra comunidad</strong>
      </v-title>
    </v-col>
    <v-col v-for="n in 4" :key="n" class="col-12 col-sm-6 py-5 my-sm-5">
      <v-card :to="`/banda/${newArray[n-1].index}/${newArray[n-1].view}`" style="height: 450px">
        <v-img :src="newArray[n-1].imgSrc" class="white--text align-end"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="200px">
          <v-card-title v-text="newArray[n-1].title"></v-card-title>
        </v-img>
        <v-card-text>
          <div class="d-flex align-center" style="height: 150px">{{newArray[n-1].text}}</div>
          <div class="d-flex align-center justify-center" style="height: 70px"><strong>Likes:
            </strong>{{newArray[n-1].likes}}</div>
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
        newArray: null,
      }
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
        myArray.sort((a, b) => {
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