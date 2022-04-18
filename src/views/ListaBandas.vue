<template>
  <div>
    <v-container class="mt-md-15" style="">
      <v-row class="d-flex justify-center align-center" style="min-height: 80vh">
        <v-col v-for="(card, i) in cards" :key="i" class="col-sm col-md-6 col-lg-4">
          <v-card>
            <v-card :to="`/banda/${i}/${card.view}`">
              <v-img :src="card.imgSrc" class="white--text align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="200px">
                <v-card-title v-text="card.title"></v-card-title>
              </v-img>
  
              <v-card-text class="text--primary">
                <div>{{card.text}}</div>
              </v-card-text>
            </v-card>

            <v-card-actions class="justify-center">
              <v-btn icon>
                <v-icon @click="card.likes = false; removeLike(card)" v-if="card.likes" style="color: red">mdi-robot-love</v-icon>
                <v-icon @click="card.likes = true; addLike(card)" v-else>mdi-robot-love-outline</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import userCollection from '../firebase/firestore'
import {doc, updateDoc, arrayUnion, arrayRemove, //arrayRemove
} from 'firebase/firestore'
  export default {
    data: () => ({
      cards: null,
    }),
    methods: {
      async addLike(card){
        const likesRef = doc(userCollection, this.$store.state.currentUserID)
        await updateDoc(likesRef,{
          likes: arrayUnion(card)
        })
      },
      async removeLike(card){
        //aun no funciona. Asignar un constructor de clases para eleminar los objetos de la base de datos(?)
        const likesRef = doc(userCollection, this.$store.state.currentUserID)
        await updateDoc(likesRef,{
          likes: arrayRemove(card)
        })
      },
    },
    computed: {
      getBandas(){
        return this.$store.state.bandas
      },
    },
    created() {
      this.cards = this.getBandas
    },
  }
</script>
<style>

</style>