<template>
    <div id="signIn">
        <v-container >

            <v-card class="d-flex align-center" style="min-height: 80vh;">
                <v-form class="px-5" ref="form" v-model="valid" lazy-validation style="width: 100%">
    
                    <v-text-field v-model="email" :rules="rules.emailRules" label="E-mail" required></v-text-field>
    
                    <v-text-field v-model="password" :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                        :rules="[rules.required, rules.min]" :type="showPassword ? 'text' : 'password'" name="input-10-1"
                        label="Contraseña" hint="Tu contraseña debe tener 8 caracteres" counter
                        @click:append="showPassword = !showPassword">
                    </v-text-field>
    
                    <v-btn :disabled="!valid" color="success" class="mr-4" @click="signIn">
                        Ingresar
                    </v-btn>
    
                    <v-btn color="error" class="mr-4" @click="reset">
                        Borrar campos
                    </v-btn>
    
                </v-form>
            </v-card>
        </v-container>
        <v-snackbar v-model="snackbar">
            Bienvenido, {{email}}
        </v-snackbar>

    </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from '../firebase/authentification'
import { getDocs } from 'firebase/firestore'
import userCollection from '../firebase/firestore'
    export default {
        data: () => ({
            valid: true,
            payload :{
                signedIn: true,
                currentUserID: null,
                currentUserData: null,
                usersData: null,
                },
            snackbar: false,
            email: '',
            password: '',
            showPassword: false,
            rules: {
                required: value => !!value || 'Esta area es requerida.',
                min: v => v.length >= 8 || 'Ingresa 8 caracteres como minimo',
                emailMatch: () => (`El e-mail o la contraseña que ingresaste no concuerdan`),
                emailRules: [
                v => !!v || 'E-mail requerido',
                v => /.+@.+\..+/.test(v) || 'El e-mail debe ser válido',
            ],
            },
        }),

        methods: {
            validate() {
                this.$refs.form.validate()
            },
            reset() {
                this.$refs.form.reset()
            },
            ...mapMutations(['SIGNED_IN']),
            async signIn() {
                await signInWithEmailAndPassword(auth, this.email, this.password)
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
                this.payload.currentUserID = auth.currentUser.uid
                let pushRoute = () => {
                    this.$router.push("/")
                }
                setTimeout(pushRoute, 500)
                this.$store.commit('SIGNED_IN', this.payload)
            }
        },
    }
</script>

<style>

</style>