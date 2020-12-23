<template>
  <div>
    <v-container>
      <v-row no-gutters>
        <v-col
          v-for="(servicio, index) of servicios"
          :key="index"
          cols="12"
          sm="4"
        >
          <v-card class="mx-auto" width="300">
                    
            <v-img 
            :src="servicio.imagen" width="300" height="250"></v-img>
            

            <v-card-title> {{servicio.nombre}} </v-card-title>

            <v-card-subtitle> {{servicio.categoria.nombre}} </v-card-subtitle>

            <v-card-actions>
              <v-btn color="blue lighten-2" text> Descripción </v-btn>

              <v-spacer></v-spacer>

              <v-btn icon @click="show = !show">
                <v-icon>{{
                  show ? "mdi-chevron-up" : "mdi-chevron-down"
                }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="show">
                <v-divider></v-divider>

                <v-card-text>
                  {{servicio.descripcion}}
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SectionNoticias",
  data() {
    return {
      servicios: null,
      show:false,
    };
  },
  mounted() {
    axios.get("http://localhost:3000/api/articulo/list").then((response) => {
      console.log(response);
      this.servicios = response.data;  
         
    });
  },
};
</script>