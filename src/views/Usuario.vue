<template lang="">
    <div>
        <v-container class="" style="min-height: 100vh">
            <v-row class="d-flex justify-center align-center mb-15" style="margin-top: 10vh; width: 100%">
                <v-card style="height: 100%">
                    <v-img class="d-flex align-end" height="250"
                        src="https://d4musicmarketing.com/wp-content/uploads/2018/02/start-music-career-header.jpg">
                        <v-avatar color="red">
                            <span class="white--text text-h5">
                                {{initials(currentUser.firstName)}}{{initials(currentUser.lastName)}}
                            </span>
                        </v-avatar>
                    </v-img>
                    <v-card-title class="text-h3">{{ currentUser.userName }}</v-card-title>
                    <v-card-text>
                        <v-row align="center" class="mx-0">
                            <div class="grey--text ms-4">
                                <p><strong>Nombre:</strong> {{ currentUser.firstName }} {{ currentUser.lastName }}</p>
                                <p><strong>Edad:</strong> {{ currentUser.age }}</p>
                                <p><strong>E-mail:</strong> {{ currentUser.email }}</p>
                            </div>
                        </v-row>
                        <v-row>
                        </v-row>
                    </v-card-text>
                    <v-divider class="mx-4"></v-divider>
                    <v-card-title>Actividad</v-card-title>
                    <v-card-text>
                        <v-row class="justify-center">
                            <v-btn-toggle v-model="toggle_multiple" dense background-color="primary" dark multiple>
                                <v-btn color="primary" dark @click.stop="dialog = true">Me gusta</v-btn>
                                <v-dialog v-model="dialog" style="width: 100vw">
                                    <v-card>
                                        <v-card-title class="text-h5">Bandas que te gustan</v-card-title>
                                        <v-card class="mx-auto col-sm col-md-6 my-5"
                                            v-for="(likedBand, i) in currentUser.likes" :key="i" outlined>
                                            <v-list-item three-line>
                                                <v-list-item-content>
                                                    <v-list-item-title class="text-sm-h5 text-md-h4 text-lg-h3">
                                                        {{ likedBand.title }}
                                                    </v-list-item-title>
                                                </v-list-item-content>
                                                <v-list-item-avatar tile size="100">
                                                    <v-img :src="likedBand.imgSrc"></v-img>
                                                </v-list-item-avatar>
                                            </v-list-item>
                                            <v-card-actions>
                                                <v-btn :to="`/banda/${likedBand.index}/${likedBand.view}`" outlined rounded
                                                    text>
                                                    Ir a la página de la banda
                                                </v-btn>
                                            </v-card-actions>
                                        </v-card>
                                        <v-spacer></v-spacer>
                                        <v-card-actions>
                                            <v-btn color="green darken-1" text @click="dialog = false">
                                                Close
                                            </v-btn>
                                        </v-card-actions>
                                    </v-card>
                                </v-dialog>
                            </v-btn-toggle>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-row>
            <v-row class="flex-column justify-center text-center" style="width: 100%">
                <v-title class="text-h3">Otros Usuarios</v-title>
                <v-row class="my-5">
                    <v-col class="col-sm col-md-4" v-for="(otherUser, i) in otherUsersData" :key="i">
                        <v-card class="mx-auto">
                            <v-card-title>
                                {{ otherUser.userName }}
                            </v-card-title>
                
                            <v-card-actions>
                                <v-btn color="orange lighten-2" text>
                                    Bandas que le gustan a {{ otherUser.userName }}
                                </v-btn>
                
                                <v-spacer></v-spacer>
                
                                <v-btn icon @click="otherUser.show = !otherUser.show">
                                    <v-icon>{{ otherUser.show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                                </v-btn>
                            </v-card-actions>
                
                            <v-expand-transition>
                                <div v-show="otherUser.show">
                                    <v-divider></v-divider>
                
                                    <v-card class="mx-auto col-sm"
                                                v-for="(otherUserLikes, i) in otherUser.likes" :key="i" outlined>
                                                <v-list-item three-line>
                                                    <v-list-item-content>
                                                        <v-list-item-title class="text-h5">
                                                            {{ otherUserLikes.title }}
                                                        </v-list-item-title>
                                                    </v-list-item-content>
                                                    <v-list-item-avatar tile size="100">
                                                        <v-img :src="otherUserLikes.imgSrc"></v-img>
                                                    </v-list-item-avatar>
                                                </v-list-item>
                                                <v-card-actions>
                                                    <v-btn :to="`/banda/${otherUserLikes.index}/${otherUserLikes.view}`" outlined rounded
                                                        text>
                                                        Ir a la página de la banda
                                                    </v-btn>
                                                </v-card-actions>
                                            </v-card>
                                </div>
                            </v-expand-transition>
                        </v-card>
                    </v-col>
                </v-row>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import auth from '../firebase/authentification'
import {getDocs} from 'firebase/firestore'
import userCollection from '../firebase/firestore'
export default {
    data() {
        return {
            dialog1: false,
            dialog: false,
            currentUser: null,
            otherUsersData: null,
        }
    },
    methods: {
        initials(element) {
            let splitElement = element.split('')
            let firstLetter = splitElement[0]
            return firstLetter
        },
    },
    async mounted() {
        let currentUserData = null
        let otherUsersData = []
        const querySnapshot = await getDocs(userCollection)
        querySnapshot.docs.forEach(doc => {
            if (doc.id == auth.currentUser.uid) {
                currentUserData = doc.data()
                console.log(currentUserData)
            }else{
                otherUsersData.push(doc.data())
            }
        });
        this.currentUser = currentUserData
        this.otherUsersData = otherUsersData
    },
}
</script>

<style lang="">
    
</style>