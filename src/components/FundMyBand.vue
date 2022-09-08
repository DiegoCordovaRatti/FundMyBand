<template>
    <div>
        <v-card class="d-flex flex-column justify-center align-center text-center my-10 py-10" style="min-height:70vh ;width: 80vw">
            <v-card-title><h1>¿Qué es FundMyBand?</h1></v-card-title>
            <br>
            <v-card-subtitle><h4><strong>FundMyBand</strong> es un proyecto sin fines de lucro para impulsar el desarrollo de bandas chilenas menos conocidas o del genero Indie</h4></v-card-subtitle>
            <v-row class="d-flex justify-center align-center mx-5 mb-10" style="width: 100%">
                <v-card v-for="(cardInfo, i) in cardsInfo" :key="i" class="col-sm col-md-4 my-3 d-flex justify-center align-center flex-column" style="min-height: 580px">
                    <v-img :src="cardInfo.imgSrc" style="min-height:40vh; object-fit: cover;"></v-img>
                    <v-card-title>{{ cardInfo.title }}</v-card-title>
                    <v-card-text>{{ cardInfo.text }}</v-card-text>
                </v-card>
            </v-row>
            <fav-band v-if="showFavBands"></fav-band>
        </v-card>
    </div>
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
                    text: 'Si alguna de nuestras bandas se vuelve de tus preferidas, guardalas en tus favoritos y vuelve a escucharla cuando lo desees. Comparte estas bandas para hacer crecer nuestra comunidad',
                },
                {
                    imgSrc: require('../../public/support.png'),
                    title: '3. Apoya nuestras bandas',
                    text: 'Si disfrutas cierta banda, no dudes en realizar un aporte voluntario para que esta banda pueda seguir haciendo lo que mejor hace y lo que a tí mas te gusta.',
                },
            ],
        };
    },
}
</script>
<style>
    
</style>