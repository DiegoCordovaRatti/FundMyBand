<template>
    <div id="signUp">
        <v-container style="min-height: 80vh;">

            <v-row class="d-flex">
                <v-col class="col-sm col-md-3 d-flex justify-center align-center">
                    <v-card class="d-flex flex-column align-center" style="width:100%">
                        <v-form class="pa-5" ref="form" v-model="valid" lazy-validation style="width: 100%">
                            <v-row>
                                <v-text-field v-model="firstName" :rules="rules.name" color="purple darken-2"
                                    label="Nombre" required></v-text-field>
                            </v-row>
                            <v-row>
                                <v-text-field v-model="lastName" :rules="rules.name" color="blue darken-2"
                                    label="Apellidos" required>
                                </v-text-field>
                            </v-row>
                            <v-row>
                                <v-text-field v-model="userName" :rules="rules.name" color="purple darken-2"
                                    label="Nombre de Usuario" required></v-text-field>
                            </v-row>
                            <v-row>
                                <v-slider v-model="age" :rules="rules.age" color="orange" label="Edad"
                                    hint="Desliza para indicar tu edad" min="0" max="100" thumb-label required>
                                </v-slider>
                            </v-row>
                            <v-row>
                                <v-select v-model="banner" :items="items" label="Elige un banner para tu cuenta"
                                    :rules="[(v) => !!v || 'Debes elegir un banner']" required>
                                    <template v-slot:selection="{ item }">
                                        {{ item.name }}) <v-spacer></v-spacer><img :src="item.image" width="150"
                                            class="my-2">
                                    </template>
                                    <template v-slot:item="{ item }">
                                        {{ item.name }}) <v-spacer></v-spacer><img :src="item.image" width="150"
                                            class="my-2">
                                    </template>
                                </v-select>
                            </v-row>
                            <v-row>
                                <v-text-field v-model="email" :rules="rules.emailRules" label="E-mail" required>
                                </v-text-field>
                            </v-row>
                            <v-row>
                                <v-text-field v-model="password" :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                    :rules="[rules.required, rules.min]" :type="showPassword ? 'text' : 'password'"
                                    name="input-10-1" label="Contraseña" hint="Tu contraseña debe tener 8 caracteres"
                                    counter @click:append="showPassword = !showPassword">
                                </v-text-field>
                            </v-row>
                            <v-row>
                                <v-btn :disabled="!valid" color="success" class="mr-4 my-1" @click="signUp" small>
                                    Registrar
                                </v-btn>
                                <v-btn color="error" class="mr-4 my-1" @click="reset" small>
                                    Borrar
                                </v-btn>
                            </v-row>
                        </v-form>
                        <!-- register -->
                    </v-card>
                </v-col>
                <v-col class="d-flex justify-center align-center col-sm col-md-9">
                    <fund-my-band></fund-my-band>
                </v-col>
            </v-row>
        </v-container>
        <v-snackbar v-model="snackbar">
            {{ snackbarMessage }}
        </v-snackbar>

    </div>
</template>

<script>
import { mapMutations } from 'vuex'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import auth from '../firebase/authentification'
import {doc, setDoc, getDocs} from 'firebase/firestore'
import userCollection from '../firebase/firestore'
import FundMyBand from './FundMyBand.vue'
    export default {
        components:{
            FundMyBand
        },
        data: () => ({
            valid: true,
            dialog: false,
            items:[],
            payload: {
                signedIn: true,
                Data: null,
                currentUserID: null,
                currentUserData: null,
                usersData: null,
            },
            snackbar: false,
            snackbarMessage: null,
            firstName: '',
            lastName: '',
            userName: '',
            age: '',
            email: '',
            password: '',
            banner: null,
            showPassword: false,
            rules: {
                required: value => !!value || 'Esta area es requerida.',
                min: v => v.length >= 8 || 'Ingresa 8 caracteres como minimo',
                emailMatch: () => (`El e-mail o la contraseña que ingresaste no concuerdan`),
                name: [val => (val || '').length > 0 || 'Esta area es requerida'],
                emailRules: [v => !!v || 'E-mail requerido', v => /.+@.+\..+/.test(v) || 'El e-mail debe ser válido', ],
                age: [val => val > 12 || `Debes ser mayor de 12 años`, ],

            },
        }),

        methods: {
            reset() {
                this.$refs.form.reset()
            },
            ...mapMutations(['SIGNED_IN']),
            async signUp() {
                try {
                    this.$refs.form.validate()
                    await createUserWithEmailAndPassword(auth, this.email, this.password)
                    this.snackbarMessage = `Su cuenta ha sido creada exitosamente, ${this.userName}`
                    let user = auth.currentUser
                    this.payload.currentUserID = auth.currentUser.uid
                    await setDoc(doc(userCollection, user.uid), {
                        firstName: this.firstName,
                        lastName: this.lastName,
                        userName: this.userName,
                        age: this.age,
                        email: this.email,
                        password: this.password,
                        uid: this.payload.currentUserID,
                        show: false,
                        banner: this.banner.image,
                        likes: [],
                    })
                    this.snackbar = true
                    let currentUserData = null
                    let usersData = []
                    const querySnapshot = await getDocs(userCollection)
                    querySnapshot.docs.forEach(doc => {
                        if (doc.id == auth.currentUser.uid) {
                            currentUserData = doc.data()
                        }
                        usersData.push(doc.data())
                    });
                    this.payload.data = auth.currentUser
                    this.payload.currentUserData = currentUserData
                    this.payload.usersData = usersData
                    this.$store.commit('SIGNED_IN', this.payload)
                    this.$router.push("/")
                } catch (error) {
                    if (error.code == "auth/email-already-in-use") {
                        this.snackbarMessage = `El email ya está en uso, intente con otro.`
                    }
                    else{
                        console.log(error)
                        this.snackbarMessage = `Error al registrar usuario, intente de nuevo.`
                    }
                    this.snackbar = true
                }
            }
        },
        async beforeCreate(){
            fetch('https://picsum.photos/v2/list?page=1&limit=50')
                    .then(response => response.json())
                    .then(response => {
                        response.forEach((r, index) =>{
                            this.items.push({name: index+1, image: r.download_url})
                        })
                    })
                    .catch(err => console.error(err));
        }
        // schmoe 0 - 26
    }
</script>

<style>

</style>