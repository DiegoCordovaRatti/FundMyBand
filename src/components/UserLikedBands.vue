<template>
  <div>
    <v-card v-if="currentUserData.likes.length > 0" class="d-flex flex-column py-10 bands-card"
      style="min-height: 80vh">
      <v-card-title class="mx-auto text-h4 mb-10">
        <strong>Vuelve a escuchar las bandas que más te han gustado</strong>
      </v-card-title>
      <v-row class="mx-3 d-flex justify-center">
        <v-card class="col-sm col-md-4 col-lg-3 ma-3 band-card d-flex justify-center align-center"
          v-for="(likedBand, i) in currentUserData.likes" :key="i" outlined style="min-height: 30vh">
          <div class="text-center">
            <v-list-item three-line>
              <v-list-item-content>
                <v-list-item-title class="text-h6">
                  {{ likedBand.title }}
                </v-list-item-title>
              </v-list-item-content>
              <v-list-item-avatar tile size="100">
                <v-img :src="likedBand.imgSrc"></v-img>
              </v-list-item-avatar>
            </v-list-item>
            <v-row>
              <iframe class="mx-auto my-4" style="border-radius:12px" :src="likedBand.spotifyUrl" width="80%"
                height="100%" frameBorder="0" allowfullscreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
            </v-row>
            <v-card-actions>
              <v-btn class="mx-auto mt-4" :to="`/banda/${likedBand.index}/${likedBand.view}`" color="success" outline
                rounded text>
                Ir a la página de la banda
              </v-btn>
            </v-card-actions>
          </div>
        </v-card>
      </v-row>
    </v-card>
  </div>
</template>
<script>
  import auth from '../firebase/authentification'
  import { getDocs } from 'firebase/firestore'
  import userCollection from '../firebase/firestore'
  export default {
    data() {
      return {
        currentUserData: [],
      }
    },
    methods: {
      async getUserLikes() {
        const querySnapshot = await getDocs(userCollection)
        querySnapshot.docs.forEach(doc => {
          if (doc.id == auth.currentUser.uid) {
            this.currentUserData = doc.data()
          }
        });
      }
    },
    created() {
      this.getUserLikes()
    },
  }
</script>
<style scoped>
.bands-card{
  background:url('https://cdn.pixabay.com/photo/2019/07/16/08/10/white-4341307_1280.jpg');
}
.band-card{
  border: 0.5px solid rgb(145, 138, 138);
  border-radius: 8px;
}
</style>