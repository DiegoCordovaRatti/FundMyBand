<template lang="">
    <div class="">
        <v-app-bar dark class="hidden-sm-and-down" fixed>
          <v-toolbar-title>FundMyBand</v-toolbar-title>
          <v-spacer></v-spacer>
          
          <v-toolbar-items v-if="$store.state.signedIn === true">
            <v-btn to="/home">
              <v-icon>
                mdi-music
              </v-icon>
              Inicio
            </v-btn>
            <v-btn to="/lista-bandas">
              <v-icon>
                mdi-guitar-electric
              </v-icon>
              Bandas
            </v-btn>
            <v-btn :to='`/mi-cuenta/${$store.state.currentUserID}`'>
              <v-icon>
                mdi-account
              </v-icon>
              Mi cuenta
            </v-btn>
            <v-btn v-show="false" to="/administrar">
              <v-icon>
                mdi-account-key
              </v-icon>
              Administrar
            </v-btn>
          </v-toolbar-items>

          <v-spacer></v-spacer>

          <v-toolbar-items v-if="$store.state.signedIn === true">
            <v-btn @click="signOutButton()">
              <v-icon>
                mdi-account-arrow-right
              </v-icon>
              Cerrar Sesión
            </v-btn>
          </v-toolbar-items>

          <v-toolbar-items v-else>
            <v-btn to="/">
              <v-icon>
                mdi-account
              </v-icon>
              Ingresa
            </v-btn>
          </v-toolbar-items>
        </v-app-bar>

        <v-toolbar app dark class="hidden-md-and-up">
          <v-toolbar-title>Mobile Menu</v-toolbar-title>
          <v-spacer></v-spacer>

          <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
            <v-app-bar-nav-icon dark slot="activator"></v-app-bar-nav-icon>
            <v-card>
              <v-toolbar color="blue-grey darken-2">
                <v-toolbar-title>Mobile Menu</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn icon @click.native="dialog = false">
                  <v-icon>close</v-icon>
                </v-btn>
              </v-toolbar>

              <v-list>
                <v-list-tile v-for="(item, i) in nav" :key="i" :to="item.view">
                  <v-list-tile-action>
                    <v-icon>{{item.icon}}</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>{{ item.text }}</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-card>
          </v-dialog>
        </v-toolbar>
        <v-snackbar v-model="snackbar">
            Su sesión ha sido cerrada correctamente.
        </v-snackbar>
        </div>
</template>
<script>
import { mapMutations } from 'vuex'
import { signOut } from 'firebase/auth'
import auth from '../firebase/authentification'
export default {
    data() {
        return {
            dialog: false,
            snackbar: false,
            signedIn: null,
            currentUserId: null,
        }
    },
    methods: {
      ...mapMutations(['SIGN_OUT']),
      signOutButton() {
        signOut(auth).then(() => {
          let signedIn = false
          this.snackbar = true
          let pushRoute = () => {
            this.$router.push("/ingresa")
          }
          setTimeout(pushRoute, 500)
          this.$store.commit('SIGNED_IN', signedIn)
        })
      }
    },
    computed: {
        modifyNavbar() {
            return this.$store.state.signedIn
        },
      },
      created() {
          this.signedIn = this.modifyNavbar
      },
}
</script>
<style lang="">
    
</style>