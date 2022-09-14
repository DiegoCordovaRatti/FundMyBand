<template lang="">
  <div class="">
    <!-- only shows the navbar if the user is signed in -->
    <v-app-bar v-if="$store.state.signedIn === true" dark class="hidden-sm-and-down" fixed>
      <v-toolbar-title>FundMyBand</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items v-for="(view, i) in views" :key="i">
        <v-btn :to="view.route">
          <v-icon>
            {{ view.icon }}
          </v-icon>
          {{ view.name }}
        </v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn @click="signOutButton()">
          <v-icon>
            mdi-account-arrow-right
          </v-icon>
          Cerrar Sesión
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    
    <!--  -->
    <!-- only shows the navbar if the user is signed in -->
    <v-app-bar v-if="$store.state.signedIn === true" dark prominent class="hidden-md-and-up" style="height: 60px">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-title>FundMyBand</v-title>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute left temporary>
      <v-list nav dense>
        <v-list-item-group v-for="(view, i) in views" :key="i" v-model="group"
          active-class="deep-purple--text text--accent-4">
          <v-list-item :to="view.route">
            <v-list-tile>
              <v-icon>
                {{ view.icon }}
              </v-icon>
              {{ view.name }}
            </v-list-tile>
          </v-list-item>
        </v-list-item-group>
        <v-list-item-group>
          <!-- connects with the database auth system to sign out -->
          <v-list-item @click="signOutButton()" class="mt-15">
            <v-list-tile>
              <v-icon>
                mdi-account-arrow-right
              </v-icon>
              Cerrar Sesión
            </v-list-tile>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    
    <!-- shows a message when the user signs out -->
    <v-snackbar v-model="snackbar">
      Su sesión ha sido cerrada correctamente.
    </v-snackbar>
  </div>
</template>
<script>
  import { mapMutations } from 'vuex'
  import { signOut } from 'firebase/auth'
  import {auth} from '../firebase/authentication'
  export default {
    data() {
      return {
        views:[
          {
            route:'/',
            icon:'mdi-music',
            name:'Inicio',
          },
          {
            route:'/lista-bandas',
            icon:'mdi-guitar-electric',
            name:'Bandas',
          },
          {
            route:`/mi-cuenta/${this.$store.state.currentUserID}`,
            icon:'mdi-account',
            name:'Mi cuenta',
          },
        ],
        dialog: false,
        snackbar: false,
        signedIn: null,
        currentUserId: null,
        drawer: false,
        group: null,
      }
    },
    watch: {
      group() {
        this.drawer = false
      },
    },
    methods: {
      ...mapMutations(['SIGN_OUT']),
      signOutButton() {
        // signs out from the database
        signOut(auth).then(() => {
          let signedIn = false
          // activates the signing out message
          this.snackbar = true
          // redirects users to 'Ingresa' view
          let pushRoute = () => {
            this.$router.go()
          }
          setTimeout(pushRoute, 500)
          //  changes the state of signed_in on vuex 
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