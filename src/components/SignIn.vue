<template>
    <div id="signIn">
        <v-container>
            <v-row>
                <v-col class="d-flex align-center justify-center" style="min-height: 80vh;">
                    <v-card class="d-flex flex-column align-center justify-center" style="height: 50%; width: 100%">
                        <v-card-title><u>Ingresa a tu cuenta</u></v-card-title>
                        <v-form class="px-5" ref="form" v-model="valid" lazy-validation style="width: 100%">
                            <v-text-field v-model="email" :rules="rules.emailRules" label="E-mail" required>
                            </v-text-field>
                            <v-text-field v-model="password" :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                :rules="[rules.required, rules.min]" :type="showPassword ? 'text' : 'password'"
                                name="input-10-1" label="Contraseña" hint="Tu contraseña debe tener 8 caracteres"
                                counter @click:append="showPassword = !showPassword">
                            </v-text-field>
                            <v-row>
                                <v-btn :disabled="!valid" color="success" class="mr-4" @click="signIn" small>
                                    Ingresar
                                </v-btn>
                                <v-btn color="error" class="mr-4" @click="reset" small>
                                    Borrar campos
                                </v-btn>
                            </v-row>
                        </v-form>
                    </v-card>
                </v-col>
                <v-col class="d-flex justify-center align-center col-sm col-md-6">
                    <v-img class="col-sm col-md-10 rounded-xl rounded-tr-0"
                        src="https://i.pinimg.com/736x/a8/dc/73/a8dc73e1ee72fb62202bbb552b985f35.jpg"></v-img>
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
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from '../firebase/authentification'
import { getDocs } from 'firebase/firestore'
import userCollection from '../firebase/firestore'
    export default {
        data: () => ({
            valid: true,
            payload: {
                data: null,
                signedIn: true,
                currentUserID: null,
                currentUserData: null,
                usersData: null,
            },
            snackbar: false,
            email: '',
            password: '',
            snackbarMessage: null,
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
                try {
                    await signInWithEmailAndPassword(auth, this.email, this.password)
                    this.snackbarMessage = `Bienvenido, ${this.email}`
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
                    this.payload.currentUserID = auth.currentUser.uid
                    let pushRoute = () => {
                        this.$router.push("/")
                    }
                    setTimeout(pushRoute, 500)
                    this.$store.commit('SIGNED_IN', this.payload)
                } catch (error) {
                    if(error.code == "auth/user-not-found"){
                        this.snackbarMessage = `Usuario invalido, intente con otro.`
                    }
                    
                    else if(error.code == "auth/wrong-password"){
                        this.snackbarMessage = `Contraseña invalida, intente con otra.`
                    }
                    else{
                        console.log(error)
                        this.snackbarMessage = `Un error ha ocurrido, intente de nuevo`
                    }
                    this.snackbar = true
                }
            }
        },
    }
</script>

<style>

</style>