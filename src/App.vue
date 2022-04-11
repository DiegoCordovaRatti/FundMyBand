<template>
  <v-app>
    <div>
      <v-app-bar dark class="hidden-sm-and-down px-5">
        <v-toolbar-title>FundMyBand</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn v-for="(item, i) in nav" :key="i" :to="item.view" flat>
            <v-icon>
              {{item.icon}}
            </v-icon>
            {{ item.text }}
          </v-btn>
        </v-toolbar-items>
      </v-app-bar>

      <v-toolbar app dark class="hidden-md-and-up">
        <v-toolbar-title>Mobile Menu</v-toolbar-title>
        <v-spacer></v-spacer>

        <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
          <v-app-bar-nav-icon dark slot="activator"></v-app-bar-nav-icon>
          <v-card>
            <v-toolbar flat color="blue-grey darken-2">
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
      <router-view></router-view>
      <v-footer dark padless>
        <v-card flat tile class="dark lighten-1 white--text text-center">
          <v-card-text>
            <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
              <v-icon size="24px">
                {{ icon }}
              </v-icon>
            </v-btn>
          </v-card-text>

          <v-card-text class="white--text pt-0">
            Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent
            ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet
            dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum
            ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci
            varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </v-card-text>

          <v-divider></v-divider>

          <v-card-text class="white--text">
            {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
          </v-card-text>
        </v-card>
      </v-footer>
    </div>
  </v-app>
</template>

<script>
  export default {
    name: 'App',

    data: () => ({
      dialog: false,
      nav:[
        {icon:"mdi-music", text: "Inicio", view: "/",},
        {icon:"mdi-guitar-electric", text: "Bandas", view: "/lista-bandas",},
        {icon:"mdi-account", text: "Mi cuenta", view: "/mi-cuenta/diego",},
        {icon:"mdi-account-plus", text: "Regístrate", view: "/sign-up",},
        {icon:"mdi-account-key", text: "Ingresa", view: "/sign-in",},
      ],
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
  };
</script>

<style>
  .transparent-body{
    background-color: transparent;
  }
</style>