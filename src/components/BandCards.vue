<template>
  <v-container class="mt-md-15">
    <v-row>
      <v-col>
        <!-- Cards are filtered by the textfield value  -->
        <v-text-field filled dark v-model="select" class="mx-4" flat label="¿Buscas una banda en especifico?">
        </v-text-field>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center align-center" style="min-height: 80vh">
      <!-- Renders cards depending on the value of the textfield  -->
      <v-col v-for="(card, i) in searchBand" :key="i" class="col-sm col-md-6 col-lg-4">
        <v-card class="bandCard">
          <!-- Redirects the user to a certain band view  -->
          <v-card :to="`/banda/${card.index}/${card.view}`" style="height: 85%">
            <v-img :src="card.imgSrc" class="white--text align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="200px">
            <v-card-title v-text="card.title"></v-card-title>
          </v-img>
          <v-card-text class="d-flex align-center" style="height: 150px">
            <div>{{card.text}}</div>
          </v-card-text>
        </v-card>
        <v-card-actions class="justify-center" style="height: 15%">
          <v-btn icon>
            <!-- alternates between icons and adds or removes the liked band from the database  -->
              <v-icon class="growIcon" @click="removeLike(card.index, card)" v-if="card.likedBand"
                style="color: #e31b23">mdi-robot-love</v-icon>
              <v-icon class="normalIcon" @click="addLike(card)" v-else>mdi-robot-confused-outline</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {auth} from '../firebase/authentication'
import userCollection from '../firebase/firestore'
import bandasCollection from '../firebase/bandasFirestore'
import {doc, getDocs, updateDoc, arrayUnion, increment} from 'firebase/firestore'
  export default {
    data: () => ({
      select: '',
      cards: null,
      currentUserLikes: null,
      bandsLiked: [],
      comparedBands: null
    }),
    methods: {
      // gets the user's liked bands from the database 
      async bandLiked() {
        const querySnapshot = await getDocs(userCollection)
        let likedBands = []
        let bandArray = null
        // gets an array with the titles of the user's liked bands
        querySnapshot.docs.forEach(doc => {
          if (doc.id == auth.currentUser.uid) {
            bandArray = doc.data().likes
            bandArray.forEach(band => {
              likedBands.push(band.title)
            })
          }
        });
        let likedBandsArray = []
        /* looks for bands that include the same title. Then, activates 
        the liked button and reloads it for each sesssion */
        likedBands.forEach((likedBand) => {
          let likesFilter = this.cards.filter(band => {
            return band.title.includes(likedBand)
          })
          this.cards.forEach(card => {
            if (likesFilter[0].title == card.title) {
              card.likedBand = true
            }
          })
          likedBandsArray.push(likesFilter[0])
        })
      },

      // adds a liked band to the user's database and activates the liked button
      async addLike(card) {
        card.likedBand = true
        let currentUserID = this.$store.state.currentUserID
        const likesRef = doc(userCollection, currentUserID)
        await updateDoc(likesRef, {
          likes: arrayUnion(card)
        })
        await updateDoc(doc(bandasCollection, card.title), {
          likes: increment(1)
        })
      },
      
      // removes a liked band to the user's database and deactivates the liked button
      async removeLike(iterator, card) {
        const querySnapshot = await getDocs(userCollection)
        let likesCount = null
        let newLikedBands = null
        card.likedBand = false
        // makes an array out of the values from the database and removes that band
        querySnapshot.docs.forEach(doc => {
          if (doc.id == auth.currentUser.uid) {
            newLikedBands = doc.data().likes
            newLikedBands.forEach((band, index) => {
              if (band.index == iterator) {
                newLikedBands.splice(index, 1)
              }
            })
          }
        });
        let currentUserID = this.$store.state.currentUserID
        const likesRef = doc(userCollection, currentUserID)
        // updates the database with the value of newLikedBands array 
        await updateDoc(likesRef, {
          likes: newLikedBands
        })
        const bandsSnapshot = await getDocs(bandasCollection)
        bandsSnapshot.docs.forEach(bandDoc => {
          if (bandDoc.id == card.title) {
            likesCount = bandDoc.data().likes
          }
        })
        // decreases the number of likes that band has
        if (likesCount > 0) {
          await updateDoc(doc(bandasCollection, card.title), {
            likes: increment(-1)
          })
        }
      },
    },
    computed: {
      getBandas() {
        return this.$store.state.bandas
      },
      // filters the cards through a textfield
      searchBand() {
        return this.cards.filter(band => {
          return band.title.toLowerCase().includes(this.select.toLowerCase())
        })
      }
    },
    created() {
      this.cards = this.getBandas
      // gets every band liked by the user and renders and liked buttons
      this.bandLiked()
    },

  } 
</script>

<style scoped>
.bandCard{
  height: 450px;
  filter: brightness(70%);
  transition: 0.3s;
}
.bandCard:hover{
  filter: brightness(100%);
  transform: scale(1.02);
}

.normalIcon{
  transform: scale(1.2);
}
.growIcon{
  transform: scale(1.2);
  animation: mymove 1.5s infinite;
}
@keyframes mymove {
  50% {
    transform: scale(1.7);
  }
}
</style>