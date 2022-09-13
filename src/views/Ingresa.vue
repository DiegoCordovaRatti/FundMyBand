<template>
  <v-card>
    <v-tabs v-model="tab" centered dark icons-and-text>
      <v-tabs-slider></v-tabs-slider>
      <v-tab href="#resgistrate">
        Regístrate
        <v-icon>mdi-account-plus</v-icon>
      </v-tab>
      <v-tab href="#ingresa">
        Ingresa
        <v-icon>mdi-account-key</v-icon>
      </v-tab>
      <v-tabs-items v-model="tab">
        <v-tab-item value="resgistrate">
          <v-card flat>
            <sign-up></sign-up>
          </v-card>
        </v-tab-item>
        <v-tab-item value="ingresa">
          <v-card flat>
            <sign-in></sign-in>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-tabs>
  </v-card>
</template>

<script>
  import SignIn from '../components/SignIn.vue'
  import SignUp from '../components/SignUp.vue'
  export default {
    components: {
      SignIn,
      SignUp
    },
    data() {
      return {
        tab: null,
      }
    },
  }
</script>