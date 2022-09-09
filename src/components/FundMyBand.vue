<template>
    <v-card class="d-flex flex-column justify-center align-center text-center py-2 px-2">
        <v-card-title class="mb-5"><h1>¿Qué es Fund My Band?</h1></v-card-title>
        <v-card-subtitle><h4><strong>FundMyBand</strong> es un proyecto sin fines de lucro para impulsar el desarrollo de bandas chilenas menos conocidas o del genero Indie</h4></v-card-subtitle>
        <v-row class="d-flex mb-5" style="width: 100%">
            <v-card v-for="(cardInfo, i) in cardsInfo" :key="i" class="col-sm col-md-4 d-flex align-center flex-column my-sm-5 my-md-2" style="min-height: 400px">
                <v-img :src="cardInfo.imgSrc" style="object-fit: cover;"></v-img>
                <v-card-title>{{ cardInfo.title }}</v-card-title>
                <v-card-text>{{ cardInfo.text }}</v-card-text>
            </v-card>
        </v-row>
        
        <fav-band v-if="showFavBands"></fav-band>
    </v-card>
</template>
<script>
import FavBand from './FavBand.vue'
export default {
    components: { FavBand },
    props:{
        showFavBands: Boolean
    },
    data() {
        return {
            cardsInfo: [
                {
                    imgSrc: require('../../public/music-band.png'),
                    title: '1. Conoce nuestras bandas',
                    text: 'Ingresa al perfil de las bandas que te llamen la atención, lee su historia, escucha su música y comparte tus opiniones con ellos',
                },
                {
                    imgSrc: require('../../public/music.png'),
                    title: '2. Guarda y comparte',
                    text: 'Guarda tus bandas favoritas y vuelve a escucharlas cuando lo desees.',
                },
                {
                    imgSrc: require('../../public/support.png'),
                    title: '3. Apoya nuestras bandas',
                    text: 'No dudes en realizar un aporte voluntario para que esta banda pueda seguir haciendo lo que mejor hace.',
                },
            ],
        };
    },
}
</script>
<style>
    
</style>