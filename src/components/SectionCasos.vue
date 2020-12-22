<template>
  <div>
    <v-container class="grey lighten-5">
      <v-row no-gutters>
        <v-col
        v-for="(item, index) of items"
          :key="index"
          cols="12"
          sm="3"
        >
          <v-card class="mx-auto pr-2" max-width="400">
            <v-img
              class="white--text align-end"
              height="200px"
              :src="item.src"
            >
              <v-card-title>{{item.titulo}}</v-card-title>
            </v-img>

            <v-card-subtitle class="pb-0">{{item.subtitulo}}  </v-card-subtitle>

            <v-card-text class="text--primary">
              <div>{{item.texto}}</div>
              
            </v-card-text>
          </v-card>
          
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
    data: () => ({
          
      items: [
        { titulo:"Primer Caso",
          subtitulo:"subtitulo",
          texto:"hola",  
          src: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
        },
        { titulo:"Primer Caso",
          subtitulo:"subtitulo",
          texto:"",  
          src: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
        },
        { titulo:"Primer Caso",
          subtitulo:"subtitulo",
          texto:"",  
          src: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
        },
        { titulo:"Primer Caso",
          subtitulo:"subtitulo",
          texto:"",  
          src: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
        },        
      ],
    
}),
};
</script>