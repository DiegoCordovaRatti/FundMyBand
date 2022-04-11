<template lang="">
    <div>
        <v-card class="mx-auto my-5" width="60%">
            <v-img height="250" src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img>

            <v-card-title>John Doe</v-card-title>

            <v-card-text>
                <v-row align="center" class="mx-0">
                    <div class="grey--text ms-4">
                        <p><strong>Edad:</strong> 24</p>
                        <p><strong>País:</strong> Chile</p>
                        <p><strong>Género Favorito:</strong> Indie</p>
                    </div>
                </v-row>
                <v-row>
                </v-row>
            </v-card-text>

            <v-card-title>Sobre mi:</v-card-title>
            <v-card-text>
                <p class="grey--text ms-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, nemo vitae assumenda totam, illo saepe ex error dolore amet autem sed? Beatae sint molestiae libero ad natus saepe veniam eos.</p>
            </v-card-text>
                
            <v-divider class="mx-4"></v-divider>

            <v-card-title>Tonight's availability</v-card-title>

            <v-card-text>
                <v-row class="justify-center">
                    <v-btn-toggle v-model="toggle_multiple" dense background-color="primary" dark multiple>
                        <v-btn color="primary" dark @click.stop="dialog1 = true">Historial</v-btn>
                        <v-btn color="primary" dark @click.stop="dialog2 = true">Me gusta</v-btn>


                        <v-dialog v-model="dialog1" width="80%">
                            <v-card>
                                <v-card-title class="text-h5">Historial de bandas</v-card-title>
                                <v-row>
                                    <v-card class="mx-auto col-sm col-md-6" outlined>
                                        <v-list-item three-line>
                                            <v-list-item-content>
                                                <div class="text-overline mb-4">
                                                    Día
                                                </div>
                                                <v-list-item-title class="text-h5 mb-1">
                                                    Nombre Banda
                                                </v-list-item-title>
                                            </v-list-item-content>
                                            <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
                                        </v-list-item>
    
                                        <v-card-actions>
                                            <v-btn outlined rounded text>
                                                Ir a la página de la banda
                                            </v-btn>
                                        </v-card-actions>
                                    </v-card>
                                </v-row>

                                <v-card-actions>
                                    <v-spacer></v-spacer>

                                    <v-btn color="green darken-1" text @click="dialog1 = false">
                                        Close
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
    
                        <v-dialog v-model="dialog2" width="80%">
                            <v-card>
                                <v-card-title class="text-h5">Bandas que te gustan</v-card-title>
                                <v-row>
                                    <v-card class="mx-auto col-sm col-md-6" outlined>
                                        <v-list-item three-line>
                                            <v-list-item-content>
                                                <v-list-item-title class="text-h5 mb-1">
                                                    Nombre Banda
                                                </v-list-item-title>
                                            </v-list-item-content>
                                            <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
                                        </v-list-item>
    
                                        <v-card-actions>
                                            <v-btn outlined rounded text>
                                                Ir a la página de la banda
                                            </v-btn>
                                        </v-card-actions>
                                    </v-card>
                                </v-row>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
    
                                    <v-btn color="green darken-1" text @click="dialog2 = false">
                                        Close
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
    
                    </v-btn-toggle>
                </v-row>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                dialog1: false,
                dialog2: false,
            }
        },
    }
</script>

<style lang="">
    
</style>