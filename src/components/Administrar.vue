<template lang="">
    <div>
        {{dialogs}}
        <v-container class="d-flex align-center" style="min-height: 80vh;">
            <v-card class="mx-auto" tile>
                <v-list shaped>
                    <v-card-title>Administrar Bandas</v-card-title>
                    <v-list-item-group v-model="selectedItem" color="primary">
                        <v-list-item v-for="(banda, i) in bandas" :key="i">
                            <v-list-item-content>
                                <v-btn @click.stop="banda.dialog = true">{{ banda.title }}</v-btn>
                                <v-dialog v-model="banda.dialog" width="80%">
                                    <v-card>
                                        <v-card-title class="text-h5">Modificar datos de {{banda.title}}</v-card-title>
                                        <v-form @submit.prevent="modifyBand(i)" ref="form" v-model="banda.valid"
                                            lazy-validation>
                                            <v-text-field v-model="banda.title" label="Nombre de la banda" type="name"
                                                required>{{banda.title}}</v-text-field>
                                            <v-text-field v-model="banda.imgSrc" label="URL de imagen de la banda"
                                                type="url" :placeholder="banda.imgSrc" required></v-text-field>
                                            <v-text-field v-model="banda.bannerSrc" label="URL del banner de la banda"
                                                type="url" :placeholder="banda.bannerSrc" required></v-text-field>                                            
                                            <v-text-field v-model="banda.text" label="Descripción de la banda"
                                                type="text" :placeholder="banda.text" required></v-text-field>                                            
                                            <v-text-field v-model="banda.description" label="Bio de la banda"
                                                type="text" :placeholder="banda.description" required></v-text-field>                                            
                                            <v-text-field v-model="banda.spotifyUrl" label="Lista de la banda" type="text"
                                                :placeholder="banda.spotifyUrl" required></v-text-field>

                                            <v-checkbox v-model="banda.checkbox"
                                                :rules="[v => !!v || '¡Necesita validar sus modificaciones!']"
                                                label="Marque para validar" required></v-checkbox>
                                            <v-btn :disabled="!banda.valid" color="success" class="mr-4" type="submit">
                                                Actualizar
                                            </v-btn>
                                            <v-btn color="error" class="mr-4" @click="reset">
                                                Limpiar formulario
                                            </v-btn>
                                            <router-link to="/administracion">
                                                <v-btn color="primary">
                                                    Regresar
                                                </v-btn>
                                            </router-link>
                                        </v-form>

                                        <v-card-actions>
                                            <v-spacer></v-spacer>

                                            <v-btn color="green darken-1" text @click="banda.dialog = false">
                                                Close
                                            </v-btn>
                                        </v-card-actions>
                                    </v-card>
                                </v-dialog>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list-item-group>
                </v-list>
            </v-card>
        </v-container>
    </div>
</template>
<script>
import {mapMutations} from 'vuex'
    export default {
        data: () => ({
            bandas: null,
        }),
        methods: {
            reset() {
                this.$refs.form.reset()
            },
            ...mapMutations(['MODIFY_BAND']),
            modifyBand(index){
                alert(`Se ha modificado los datos de ${this.bandas[index].title}`)
                this.$store.commit('MODIFY_BAND', this.bandas)
            }
        },
        computed: {
            getBandas() {
                return this.$store.state.bandas
            },
        },
        created() {
            this.bandas = this.getBandas
        },
    }
</script>
<style lang="">
    
</style>