<template>
  <div>
    <v-container style="min-height: 100vh">
      <v-row dense class="d-flex justify-center">
        <v-col v-for="(card, i) in cards" :key="i" class="col-sm col-md-6 col-lg-4">
          <v-card  :to="`/banda/${i}/${card.view}`">
            <v-img :src="card.imgSrc" class="white--text align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px">
              <v-card-title v-text="card.title"></v-card-title>
            </v-img>

            <v-card-text class="text--primary">
              <div>{{card.text}}</div>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-share-variant</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  export default {
    data: () => ({
      cards: null,
    }),
    computed: {
      getBandas(){
        return this.$store.state.bandas
      },
    },
    created() {
      this.cards = this.getBandas
    },
  }
</script>
<style>

</style>