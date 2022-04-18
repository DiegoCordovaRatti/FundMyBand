<template>
    <div id="signUp">
        <v-container>
            <v-card class="d-flex align-center" style="min-height: 80vh;">

        <v-form class="px-5" ref="form" v-model="valid" lazy-validation style="width: 100%">

            <v-row>
                <v-col cols="12" sm="6">
                    <v-text-field v-model="firstName" :rules="rules.name" color="purple darken-2" label="Nombre"
                        required></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                    <v-text-field v-model="lastName" :rules="rules.name" color="blue darken-2" label="Apellidos" required>
                    </v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" sm="6">
                    <v-text-field v-model="userName" :rules="rules.name" color="purple darken-2" label="Nombre de Usuario"
                        required></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                <v-slider v-model="age" :rules="rules.age" color="orange" label="Edad" hint="Desliza para indicar tu edad" min="0"
                    max="100" thumb-label required></v-slider>
                </v-col>
            </v-row>

            <v-row>
            </v-row>

            <v-row><v-text-field v-model="email" :rules="rules.emailRules" label="E-mail" required></v-text-field></v-row>

            <v-row>
                <v-text-field v-model="password" :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="[rules.required, rules.min]" :type="showPassword ? 'text' : 'password'" name="input-10-1"
                    label="Contraseña" hint="Tu contraseña debe tener 8 caracteres" counter @click:append="showPassword = !showPassword">
                </v-text-field>
                </v-row>

                <v-row>
                    <v-btn :disabled="!valid" color="success" class="mr-4" @click="signUp">
                        Registrar
                    </v-btn>

                    <v-btn color="error" class="mr-4" @click="reset">
                        Borrar campos
                    </v-btn>
                </v-row>

                </v-form>
                <!-- register -->
            </v-card>
                </v-container>
                <v-snackbar v-model="snackbar">
                    Su cuenta ha sido creada exitosamente, {{userName}}
                </v-snackbar>

    </div>
</template>

<script>
import { mapMutations } from 'vuex'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import auth from '../firebase/authentification'
import {doc, setDoc, getDocs} from 'firebase/firestore'
import userCollection from '../firebase/firestore'
    export default {
        data: () => ({
            valid: true,
            payload: {
                signedIn: true,
                currentUserID: null,
                currentUserData: null,
                usersData: null,
            },
            snackbar: false,
            firstName: '',
            lastName: '',
            userName: '',
            age: '',
            email: '',
            password: '',
            avatar: '',
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
                this.$refs.form.validate()
                await createUserWithEmailAndPassword(auth, this.email, this.password)
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
                this.payload.currentUserData = currentUserData
                this.payload.usersData = usersData
                this.$router.push("/")
                this.$store.commit('SIGNED_IN', this.payload)
            }
        },
        // schmoe 0 - 26
    }
</script>

<style>

</style>