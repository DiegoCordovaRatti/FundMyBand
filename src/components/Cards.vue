<template>
    <div>
        <h2>Bandas Destacadas</h2>
        <v-item-group>
            <v-row>
                <v-col class="col-sm col-md-4" v-for="(band, i) in bands" :key="i">
                    <v-card class="mx-auto">
                        <v-img :src="band.src"></v-img>
            
                        <v-card-title>
                            {{ band.name }}
                        </v-card-title>
            
                        <v-card-actions>
                            <v-btn color="orange lighten-2" text>
                                Saber Más
                            </v-btn>
            
                            <v-spacer></v-spacer>
            
                            <v-btn icon @click="band.show = !band.show">
                                <v-icon>{{ band.show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                            </v-btn>
                        </v-card-actions>
            
                        <v-expand-transition>
                            <div v-show="band.show">
                                <v-divider></v-divider>
            
                                <v-card-text>
                                    {{ band.bio }}
                                </v-card-text>
                            </div>
                        </v-expand-transition>
                    </v-card>
                </v-col>
            </v-row>
        </v-item-group>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                bands:[
                    {
                        name: "Banda 1",
                        bio: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
                        src: "https://picsum.photos/id/1/200/200",
                        show: false,
                    }, 
                    {
                        name: "Banda 2",
                        bio: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur",
                        src: "https://picsum.photos/id/2/200/200",
                        show: false,
                    }, 
                    {
                        name: "Banda 3",
                        bio: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
                        src: "https://picsum.photos/id/3/200/200",
                        show: false,
                    },
                ]
            }
        },
    }
</script>
