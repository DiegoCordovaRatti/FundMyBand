<template>
    <div>
        <v-carousel style="width: 100vw">
            <v-carousel-item :to="item.view" v-for="(item, i) in items" :key="i" :src="item.src">
                <v-sheet color="transparent" height="100%" tile>
                    <v-row class="fill-height flex-column text-center mx-5" align="center" justify="center">
                        <div class="text-h2" :style="item.textColor">
                            {{ item.header }}
                        </div>
                        <div class="text-h5" :style="item.textColor">
                            {{ item.msg }}
                        </div>
                    </v-row>
                </v-sheet>
            </v-carousel-item>
        </v-carousel>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                items: [{
                        src: 'https://musicadvisor.com/wp-content/uploads/2017/05/playing-in-a-band.jpg',
                        header: "Conoce nuevas bandas",
                        msg:"Conoce las bandas que siempre te habían gustado, pero no lo sabías",
                        textColor: "color: white",
                        view: "/lista-bandas"
                    },
                    {
                        src: 'https://images.logicalincrements.com/gallery/1920/822/build-pc-audio-editing-ableton-live-10-release-3.jpeg',
                        header: "Escucha otra vez",
                        msg:"Vuelve a escuchar las bandas que más amas",
                        textColor: "color: white",
                        view: "/mi-cuenta/diego"
                    },
                ],
            }
        },
    }
</script>