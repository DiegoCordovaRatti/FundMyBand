<template lang="">
  <div class="">
    <v-app-bar dark class="hidden-sm-and-down" fixed>
      <v-toolbar-title>FundMyBand</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-toolbar-items v-if="$store.state.signedIn === true">
        <v-btn to="/">
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
        <v-btn to="/ingresa">
          <v-icon>
            mdi-account
          </v-icon>
          Ingresa
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <!--  -->

    <v-app-bar dark prominent class="hidden-md-and-up" style="height: 60px">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-title>FundMyBand</v-title>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute left temporary>
      <v-list nav dense>
        <v-list-item-group v-if="$store.state.signedIn === true" v-model="group"
          active-class="deep-purple--text text--accent-4">
          <v-list-item to="/">
            <v-list-tile>
              <v-icon>
                mdi-music
              </v-icon>
              Inicio
            </v-list-tile>
          </v-list-item>
          <v-list-item to="/lista-bandas">
            <v-list-tile>
              <v-icon>
                mdi-guitar-electric
              </v-icon>
              Bandas
            </v-list-tile>
          </v-list-item>
          <v-list-item :to='`/mi-cuenta/${$store.state.currentUserID}`'>
            <v-list-tile>
              <v-icon>
                mdi-account
              </v-icon>
              Mi cuenta
            </v-list-tile>
          </v-list-item>
          <v-list-item v-show="false" to="/administrar">
            <v-list-tile>
              <v-icon>
                mdi-account-key
              </v-icon>
              Administrar
            </v-list-tile>
          </v-list-item>
          <v-list-item @click="signOutButton()" class="mt-15">
            <v-list-tile>
              <v-icon>
                mdi-account-arrow-right
              </v-icon>
              Cerrar Sesión
            </v-list-tile>
          </v-list-item>
        </v-list-item-group>
        <v-list-item-group v-else v-model="group" active-class="deep-purple--text text--accent-4">
          <v-list-item to="/ingresa">
            <v-list-tile>
              <v-icon>
                mdi-account
              </v-icon>
              Ingresa
            </v-list-tile>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>


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
            drawer: false,
            group: null,
        }
    },
    watch: {
      group () {
        this.drawer = false
      },
    },
    methods: {
      ...mapMutations(['SIGN_OUT']),
      signOutButton() {
        signOut(auth).then(() => {
          let signedIn = false
          this.snackbar = true
          let pushRoute = () => {
            this.$router.go()
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