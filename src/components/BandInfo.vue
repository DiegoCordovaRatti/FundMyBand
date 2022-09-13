<template lang="">
  <v-container class="mt-md-15" fluid style="padding: 0">
    <v-row class="mb-5">
      <v-img class="d-flex align-end" :src="band.bannerSrc" aspect-ratio="2.5" fluid>
        <div class="ma-8 d-flex align-center" fluid>
          <!-- shows how many likes the band has got -->
          <v-icon style="color: #e31b23" x-large>mdi-robot-love</v-icon>
          <span class="ms-3 text-h5" style="color:white">{{ likesQuantity }} Likes</span>
        </div>
      </v-img>
    </v-row>

    <div class="d-flex justify-center align-center flex-column py-10" style="min-height: 100vh">
      <v-row class="my-5 justify-center">
        <v-title class=" text-h4"><strong>Conoce a {{band.title}}</strong></v-title>
      </v-row>
      <v-row class="my-5">
        <div class="col-sm col-md-6 d-flex justify-center" style="padding: 0">
          <!-- renders a spotify iframe with certain band's album -->
          <iframe style="border-radius:12px" :src="band.spotifyUrl" width="80%" height="100%" frameBorder="0"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
        </div>
        <div class="col-sm col-md-6">
          <!-- renders a band's summary -->
          <v-row class="d-flex justify-center">
            <img :src="band.imgSrc" width="80%">
          </v-row>
          <v-row class="d-flex justify-center px-10">
            <p>{{band.description}}</p>
          </v-row>
        </div>
      </v-row>
    </div>

    <v-row class="d-flex justify-center mb-10" style="transform: scale(1.5)">
      <!-- renders a button connected to paypal  -->
      <form action="https://www.paypal.com/donate" method="post" target="_blank">
        <input type="hidden" name="hosted_button_id" value="7UCNHKMB8L85S" />
        <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit"
          :title="`¡Realiza una donación para apoyar a ${band.title}!`" alt="Donate with PayPal button" />
        <img alt="" border="0" src="https://www.paypal.com/en_CL/i/scr/pixel.gif" width="1" height="1" />
      </form>
    </v-row>

    <v-row class="my-5 justify-center flex-column text-center">
      <v-card class="members-card py-15 d-flex justify-center flex-column text-center">
        <v-card-title class="my-5 mx-auto text-h4"><strong>Conoce a los miembros de {{band.title}}</strong>
        </v-card-title>
        <v-item-group class="px-5">
          <v-row class="justify-center">
            <v-col v-for="(bandMember, i) in bandMembers" :key="i" class="col-sm col-md-6 col-lg-4">
              <v-card class="member-card">
                <v-img height="300px" :src="bandMember.photo"></v-img>
                <v-card-text>
                  <v-timeline align-top dense>
                    <v-timeline-item color="black" small>
                      <div>
                        <div class="font-weight-normal">
                          <strong> {{ bandMember.name }} </strong>
                        </div>
                      </div>
                    </v-timeline-item>
                    <v-timeline-item color="success" small>
                      <div>
                        <div class="font-weight-normal">
                          <strong>Rol:</strong>
                        </div>
                        <div>{{ bandMember.role }}</div>
                      </div>
                    </v-timeline-item>
                    <v-timeline-item color="black" small>
                      <div>
                        <v-btn v-for="(social, i) in bandMember.socialMedia" :key="i" class="ma-2" text icon
                          :href="social.link" target="_blank" :color="social.color">
                          <v-icon>{{social.icon}}</v-icon>
                        </v-btn>
                      </div>
                    </v-timeline-item>
                  </v-timeline>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-item-group>
      </v-card>
    </v-row>
    <v-row class="my-15 flex-column">
      <v-row class="d-flex flex-column justify-center text-center">
        <v-title class="text-h4"><strong>Apoya a {{band.title}} con un comentario</strong></v-title>
      </v-row>
      <v-row class="d-flex justify-center">
        <v-col class="col-sm col-md-6 mx-2">
          <v-form @submit.prevent="addComment(); getComments()">
            <v-textarea class="white mt-5" v-model="payload.newComment" filled :rules="rules" counter="300"
              hint="Debes escribir por lo menos 10 palabras y un máximo de 300" light auto-grow
              label="Agrega un comentario para la banda" rows="4" row-height="30" shaped required>
            </v-textarea>
            <v-btn type="submit" class="success my-2">Publicar</v-btn>
          </v-form>
        </v-col>
      </v-row>
      <v-row class="justify-center mx-3">
        <v-col v-for="(comment, i) in publishedComments" :key="i" class="col-sm col-md-4 col-lg-3">
          <v-card class="d-flex flex-column align-center justify-center" style="min-height: 150px">
            <v-card-title>
              <div>
                <strong> {{ comment.currentUser }} </strong>
              </div>
            </v-card-title>
            <v-card-text>
              <div class="text-center">
                <span>{{ comment.newComment }}</span>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-row>
  </v-container>
</template>

<script>
  import auth from '../firebase/authentification'
  import {arrayUnion, doc, updateDoc, getDocs} from 'firebase/firestore'
  import bandasCollection from '../firebase/bandasFirestore'
  import userCollection from '../firebase/firestore'
  export default {
    data() {
      return {
        band: null,
        bandMembers: null,
        likesQuantity: 0,
        payload: {
          newComment: null,
          band: null,
          currentUser: null,
          userID: null
        },
        rules: [v => v.length >= 10 || 'Debes escribir mínimo 10 caracteres', v => v.length <= 300 || 'Debes escribir máximo 300 caracteres'],
        publishedComments: [],
      }
    },
    methods: {
      async addComment() {
        await updateDoc(doc(bandasCollection, this.payload.band), {
          newComments: arrayUnion(this.payload)
        })
        await updateDoc(doc(userCollection, auth.currentUser.uid), {
          newComments: arrayUnion(this.payload)
        })
      },
      async getComments() {
        const bandasSnapshot = await getDocs(bandasCollection)
        bandasSnapshot.docs.forEach(doc => {
          if (doc.id == this.payload.band) {
            this.publishedComments = doc.data().newComments
            this.likesQuantity = doc.data().likes
          }
        });
      },
    },
    computed: {
      getBandas() {
        return this.$store.state.bandas
      },
    },
    created() {
      let bandId = this.$route.params.id
      let bandInfo = this.getBandas
      this.band = bandInfo[bandId]
      this.bandMembers = bandInfo[bandId].bandMembers
      this.payload.band = bandInfo[bandId].title
      this.payload.currentUser = this.$store.state.currentUserData.userName
      this.payload.userID = auth.currentUser.uid
      this.getComments()
    },
  }
</script>
<style scoped>
  .members-card {
    background: url('https://cdn.pixabay.com/photo/2019/07/16/08/10/white-4341307_1280.jpg');
  }
  .member-card {
    border: 0.5px solid rgb(145, 138, 138);
    border-radius: 8px;
    filter: brightness(0.8);
    transition: 1s;
  }
  .member-card:hover {
    filter: brightness(1);
  }
</style>