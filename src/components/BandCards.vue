<template>
  <v-container>
    <v-row justify="space-around">
      <v-col v-for="(band, i) in bands" :key="i">
        <v-card class="mx-auto" max-width="344">
          <v-img :src="band.photo"></v-img>
          <v-card-title>
            {{ band.name }}
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
    export default {
      data() {
        return {
          band: null,
        }
      },
      computed: {
        getBandas() {
          return this.$store.state.bandas
        },
      },
      created() {
        let bandId = this.$route.params.id
        let bandInfo = this.getBandas
        this.band = bandInfo[bandId]
      },
    }
</script>
