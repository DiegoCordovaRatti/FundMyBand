<template lang="">
    <div>
        <v-container class="mt-md-15" fluid style="padding: 0">
            <v-row class="mb-5">
                <v-img class="d-flex align-end" :src="band.bannerSrc" aspect-ratio="2.5" fluid>
                    <div class="ma-8 d-flex align-center" fluid>
                        <v-icon style="color: #e31b23">mdi-robot-love</v-icon>
                        <span class="ms-3" style="color:white">{{ likesQuantity }} Likes</span>
                    </div>
                </v-img>
            </v-row>
            <v-row class="my-5 justify-center">
                <h2>Conoce a <span>{{band.title}}</span></h2>
            </v-row>
            <v-row class="my-5">
                <div class="col-sm col-md-6 d-flex justify-center" style="padding: 0">
                    <iframe style="border-radius:12px" :src="band.spotifyUrl" width="80%" height="100%" frameBorder="0"
                        allowfullscreen=""
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                </div>
                <div class="col-sm col-md-6">
                    <v-row class="d-flex justify-center">
                        <img :src="band.imgSrc" width="80%">
                    </v-row>
                    <v-row class="d-flex justify-center px-10">
                        <p>{{band.description}}</p>
                    </v-row>
                </div>
            </v-row>
            <v-row class="my-5 justify-center flex-column text-center">
                <h2 class="my-5">Conoce a <span>{{band.title}}</span></h2>
                <v-item-group class="px-5">
                    <v-row class="justify-center">
                        <v-col v-for="(bandMember, i) in bandMembers" :key="i" class="col-sm col-md-6 col-lg-4">
                            <v-card>
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
                                                <v-btn v-for="(social, i) in bandMember.socialMedia" :key="i"
                                                    class="ma-2" text icon :href="social.link" target="_blank"
                                                    :color="social.color">
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
            <v-row class="justify-center">
                <v-col v-for="(comment, i) in publishedComments" :key="i" class="col-sm col-md-4 col-lg-2">
                    <v-card>
                        <v-card-title>
                            <div>
                                <strong> {{ comment.currentUser }} </strong>
                            </div>
                        </v-card-title>
                        <v-card-text>
                            <div>
                                <div>{{ comment.newComment }}</div>
                            </div>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
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
                payload:{
                    newComment: null,
                    band: null,
                    currentUser: null,
                    userID: null
                    },
                rules: [v => v.length >= 10 || 'Debes escribir mínimo 10 caracteres', v => v.length <= 300 || 'Debes escribir máximo 300 caracteres'],
                publishedComments:[],
            }
        },
        methods: {
            async addComment(){
                await updateDoc(doc(bandasCollection, this.payload.band), {
                    newComments: arrayUnion(this.payload) 
                    })
                await updateDoc(doc(userCollection, auth.currentUser.uid), {
                    newComments: arrayUnion(this.payload) 
                    })
            },
            async getComments(){
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
<style lang="">
    
</style>