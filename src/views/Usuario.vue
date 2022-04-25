<template lang="">
    <div>
        <v-container class="" style="min-height: 100vh">
            <v-row class="d-flex justify-center align-center mb-15" style="margin-top: 10vh; width: 100%">
                <v-card style="height: 100%">
                    <v-img class="d-flex align-end" height="250" :src="currentUser.banner">
                        <v-row>
                            <v-col>
                                <v-avatar color="red">
                                    <span class="white--text text-h5">
                                        {{initials(currentUser.firstName)}}{{initials(currentUser.lastName)}}
                                    </span>
                                </v-avatar>
                            </v-col>
                            <v-col class="d-flex justify-end align-end">
                                <v-dialog v-model="dialog2" style="width: 70vw">
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-btn color="red lighten-2" dark v-bind="attrs" v-on="on">
                                            Cambiar Banner
                                        </v-btn>
                                    </template>

                                    <v-card>
                                        <v-card-title class="text-h5 grey lighten-2">
                                            Cambiar Banner
                                        </v-card-title>

                                        <v-row>
                                            <v-col v-for="(item, i) in items" :key="i">
                                                <v-img class="bannerImg" :src="item"
                                                    @click="updateBanner(item); dialog2 = false"></v-img>
                                            </v-col>
                                        </v-row>

                                        <v-divider></v-divider>

                                        <v-card-actions>
                                            <v-spacer></v-spacer>
                                            <v-btn color="primary" text @click="dialog2 = false">
                                                Cerrar
                                            </v-btn>
                                        </v-card-actions>
                                    </v-card>
                                </v-dialog>
                            </v-col>
                        </v-row>
                    </v-img>
                    <v-card-title class="text-h3">{{ currentUser.userName }}</v-card-title>
                    <v-card-text>
                        <v-row align="center" class="mx-0">
                            <div class="grey--text ms-4" style="width:100%">
                                <v-row class="ma-0 pa-0">
                                    <v-col class="ma-0 pa-0">
                                        <p><strong>Usuario:</strong> {{ currentUser.userName }}</p>
                                        </v-col>
                                        <v-col class="d-flex justify-end ma-0 pa-0">
                                            <v-dialog v-model="dialog3" style="width: 70vw">
                                                <template v-slot:activator="{ on, attrs }">
                                                    <v-btn color="red lighten-2" dark v-bind="attrs" v-on="on">
                                                        Cambiar Nombre de usuario
                                                    </v-btn>
                                                </template>

                                                <v-card>
                                                    <v-card-title class="text-h5 grey lighten-2">
                                                        Cambiar Nombre de Usuario
                                                    </v-card-title>

                                                    <v-text-field v-model="newUserName" :rules="[val => (val || '').length > 0 || 'Esta area es requerida']" color="purple darken-2" label="Nombre de Usuario" required></v-text-field>

                                                    <v-divider></v-divider>

                                                    <v-card-actions>
                                                        <v-spacer></v-spacer>
                                                        <v-btn color="primary" text @click="updateUserName(); dialog3 = false">
                                                            Cambiar
                                                        </v-btn>
                                                    </v-card-actions>
                                                </v-card>
                                            </v-dialog>
                                        </v-col>
                                        </v-row>
                                        <v-row class="ma-0 pa-0">
                                            <v-col class="ma-0 pa-0">
                                                <p><strong>Nombre:</strong> {{ currentUser.firstName }}
                                                    {{ currentUser.lastName }}</p>
                                            </v-col>
                                        </v-row>
                                        <v-row class="ma-0 pa-0">
                                            <p><strong>Edad:</strong> {{ currentUser.age }}</p>
                                        </v-row>
                                        <v-row class="ma-0 pa-0">
                                            <p><strong>E-mail:</strong> {{ currentUser.email }}</p>
                                        </v-row>
                                        </div>
                                        </v-row>

                                        </v-card-text>
                                        <v-divider class="mx-4"></v-divider>
                                        <v-card-title>Actividad</v-card-title>
                                        <v-card-text>
                                            <v-row class="justify-center">
                                                <v-btn-toggle v-model="toggle_multiple" dense background-color="primary"
                                                    dark multiple>
                                                    <v-btn color="primary" dark @click.stop="dialog = true">Me gusta
                                                    </v-btn>
                                                    <v-dialog v-model="dialog" style="width: 100vw">
                                                        <v-card>
                                                            <v-card-title class="text-h5">Bandas que te gustan
                                                            </v-card-title>
                                                            <v-card class="mx-auto col-sm col-md-6 my-5"
                                                                v-for="(likedBand, i) in currentUser.likes" :key="i"
                                                                outlined>
                                                                <v-list-item three-line>
                                                                    <v-list-item-content>
                                                                        <v-list-item-title
                                                                            class="text-sm-h5 text-md-h4 text-lg-h3">
                                                                            {{ likedBand.title }}
                                                                        </v-list-item-title>
                                                                    </v-list-item-content>
                                                                    <v-list-item-avatar tile size="100">
                                                                        <v-img :src="likedBand.imgSrc"></v-img>
                                                                    </v-list-item-avatar>
                                                                </v-list-item>
                                                                <v-card-actions>
                                                                    <v-btn
                                                                        :to="`/banda/${likedBand.index}/${likedBand.view}`"
                                                                        color="success" outline rounded text>
                                                                        Ir a la página de la banda
                                                                    </v-btn>
                                                                </v-card-actions>
                                                            </v-card>
                                                            <v-spacer></v-spacer>
                                                            <v-card-actions>
                                                                <v-btn color="green darken-1" text
                                                                    @click="dialog = false">
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
                        <v-card class="mx-auto" width="300">
                            <v-img :src="otherUser.banner" height="100" cover>
                                <v-card-title>
                                    {{ otherUser.userName }}
                                </v-card-title>
                            </v-img>

                            <v-card-actions>
                                <v-btn @click="otherUser.show = !otherUser.show" class="overflow-hidden"
                                    color="orange lighten-2" text small>
                                    Le gusta a {{ otherUser.userName }}
                                </v-btn>

                                <v-spacer></v-spacer>

                                <v-btn icon @click="otherUser.show = !otherUser.show">
                                    <v-icon>{{ otherUser.show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                                </v-btn>
                            </v-card-actions>

                            <v-expand-transition>
                                <div v-show="otherUser.show">
                                    <v-divider></v-divider>

                                    <v-card class="mx-auto col-sm" v-for="(otherUserLikes, i) in otherUser.likes"
                                        :key="i" outlined>
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
                                            <v-btn :to="`/banda/${otherUserLikes.index}/${otherUserLikes.view}`"
                                                outlined rounded text small>
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
import {getDocs, doc, updateDoc} from 'firebase/firestore'
import userCollection from '../firebase/firestore'
export default {
    data() {
        return {
            dialog1: false,
            dialog2: false,
            dialog3: false,
            dialog: false,
            currentUser: null,
            otherUsersData: null,
            items:[],
            newBanner:'',
            newUserName:'',
        }
    },
    methods: {
        initials(element) {
            let splitElement = element.split('')
            let firstLetter = splitElement[0]
            return firstLetter
        },
        async removeLike(iterator) {
            const querySnapshot = await getDocs(userCollection)
            let likedBands = null
            querySnapshot.docs.forEach(doc => {
                if (doc.id == auth.currentUser.uid) {
                    likedBands = doc.data().likes
                    likedBands.forEach((band, index) => {
                        if (band.index == iterator) {
                            likedBands.splice(index, 1)
                        }
                    })
                }
            });
            let currentUserID = this.$store.state.currentUserID
            const likesRef = doc(userCollection, currentUserID)
            await updateDoc(likesRef, {
                likes: likedBands
            })
        },
        async updateBanner(newBanner){
            this.newBanner = newBanner
            await updateDoc(doc(userCollection, auth.currentUser.uid), {
                banner: this.newBanner
            })
        },
        async updateUserName(){
            await updateDoc(doc(userCollection, auth.currentUser.uid), {
                userName: this.newUserName
            })
        }
    },
    async mounted() {
        fetch('https://picsum.photos/v2/list?page=1&limit=50')
            .then(response => response.json())
            .then(response => {
                response.forEach((r) =>{
                    this.items.push(r.download_url)
                })
            })
            .catch(err => console.error(err));
        let currentUserData = null
        let otherUsersData = []
        const querySnapshot = await getDocs(userCollection)
        querySnapshot.docs.forEach(doc => {
            if (doc.id == auth.currentUser.uid) {
                currentUserData = doc.data()
            } else {
                otherUsersData.push(doc.data())
            }
        });
        this.currentUser = currentUserData
        this.otherUsersData = otherUsersData
        this.picsumImg = this.picsum
    },
}
</script>

<style scope>
    .bannerImg{
        width:200px;
        height: 150px;
        object-fit: cover;
        filter: brightness(0.8);
        transition: ease 0.7s;
    }
    .bannerImg:hover{
        cursor: pointer;
        filter: brightness(1);
        transform: scale(1.1);
    }
</style>