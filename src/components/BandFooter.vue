<template lang="">
    <div>
        <v-footer dark padless>
        <v-card flat tile class="dark lighten-1 white--text text-center">
          <v-card-text>
            <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
              <v-icon size="24px">
                {{ icon }}
              </v-icon>
            </v-btn>
          </v-card-text>

          <v-card-text class="white--text pt-0" style="width:100vw">
            
          </v-card-text>

          <v-divider></v-divider>

          <v-card-text class="white--text">
            {{ new Date().getFullYear() }} — <strong>FundMyBand</strong>
          </v-card-text>
        </v-card>
      </v-footer>
    </div>
</template>
<script>
export default {
    data() {
        return {
            icons: [
                'mdi-facebook',
                'mdi-twitter',
                'mdi-linkedin',
                'mdi-instagram',
            ],
        }
    },
}
</script>
<style lang="">
    
</style>