<template lang="">
    <div>
        <v-container class="mt-md-15" fluid style="padding: 0">
            <v-row class="mb-5">
                <v-img :src="band.bannerSrc" aspect-ratio="2.5" fluid></v-img>
            </v-row>
            <v-row class="my-5 justify-center">
                <h2>Conoce a <span>{{band.title}}</span></h2>
            </v-row>
            <v-row class="my-5">
                <div class="col-sm col-md-6 d-flex justify-center"  style="padding: 0">
                    <iframe style="border-radius:12px" :src="band.spotifyUrl" width="80%"
                        height="100%" frameBorder="0" allowfullscreen=""
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                </div>
                <div class="col-sm col-md-6">
                    <v-row class="d-flex justify-center">
                        <img :src="band.imgSrc" width="80%">
                    </v-row>
                    <v-row class="d-flex justify-center px-10">
                        <p>{{band.description}}</p>
                    </v-row>
                </div>
            </v-row>
            <v-row class="my-5 justify-center flex-column text-center">
                <h2 class="my-5">Conoce a <span>{{band.title}}</span></h2>
                <v-item-group class="px-5">
                    <v-row class="justify-center">
                        <v-col v-for="(bandMember, i) in bandMembers" :key="i" class="col-sm col-md-6 col-lg-4">
                            <v-card >
                                <v-img height="300px" :src="bandMember.photo"></v-img>
                                <v-card-text>
                                    <v-timeline align-top dense>
                                        <v-timeline-item color="black" small>
                                            <div>
                                                <div class="font-weight-normal">
                                                    <strong> {{ bandMember.name }} </strong>
                                                </div>
                                            </div>
                                        </v-timeline-item>
                                        <v-timeline-item color="success" small>
                                            <div>
                                                <div class="font-weight-normal">
                                                    <strong>Rol:</strong>
                                                </div>
                                                <div>{{ bandMember.role }}</div>
                                            </div>
                                        </v-timeline-item>
                                        <v-timeline-item color="black" small>
                                            <div>
                                                <v-btn v-for="(social, i) in bandMember.socialMedia" :key="i" class="ma-2" text icon :href="social.link" target="_blank" :color="social.color">
                                                    <v-icon>{{social.icon}}</v-icon>
                                                </v-btn>
                                            </div>
                                        </v-timeline-item>
                                    </v-timeline>
                                </v-card-text>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-item-group>
            </v-row>
        </v-container>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                band: null,
                bandMembers: null,
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
            this.bandMembers = bandInfo[bandId].bandMembers
        },
    }
</script>
<style lang="">
    
</style>