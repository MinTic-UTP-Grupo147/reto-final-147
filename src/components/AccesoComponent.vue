<template>
<div>
  <v-app id="inspire">
    
    <v-app-bar app>
      <v-app-bar-nav-icon 
      @click="drawer = !drawer; ocultar()"></v-app-bar-nav-icon>

      <v-toolbar-title>Sección {{this.$store.state.usuario.rol}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
      icon
      class="mr-5"
      @click="salir()">
        <v-icon>mdi-logout</v-icon>
        <span>salir</span>
      </v-btn>
      
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" fixed temporary>
      <v-card class="mx-auto" width="300">
        <v-list>
          <v-list-item :to ="{name:'Home'}">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>

            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>
          
            <v-list-group :value="true" no-action >
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title>Categorías</v-list-item-title>
                </v-list-item-content>
              </template>

              <v-list-item 
              v-for="([title, icon, ruta], i) in admins" :key="i" 
              link
              :to = "{name: ruta}">
                <v-list-item-title v-text="title"></v-list-item-title>

                <v-list-item-icon>
                  <v-icon v-text="icon"></v-icon>
                </v-list-item-icon>
              </v-list-item>
            </v-list-group>

            <v-list-group 
            v-if="this.$store.state.usuario.rol === 'Administrador'"
            no-action >
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title>Usuario</v-list-item-title>
                </v-list-item-content>
              </template>

              <v-list-item 
              v-for="([title, icon, ruta], i) in cruds" 
              :key="i" 
              link
              :to="{name:ruta}"
              >
                <v-list-item-title v-text="title"></v-list-item-title>

                <v-list-item-icon>
                  <v-icon v-text="icon"></v-icon>
                </v-list-item-icon>
              </v-list-item>
            </v-list-group>
          
        </v-list>
      </v-card>
    </v-navigation-drawer>

    <v-main class="grey lighten-2">
      <v-container>
        <router-view></router-view>
        <div id='informacion' style="display:;">
          <div class="container mt-5">
        <div class="card position-absolute top-50 start-50 translate-middle" style="width: 18rem;">
        <div class="card-header">
        <h3>Bienvenido</h3> 
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item"><h5>Id:</h5>{{this.$store.state.usuario.id}}</li>
            <li class="list-group-item"> <h5>Name:</h5>{{this.$store.state.usuario.nombre}}</li>
            <li class="list-group-item"><h5>Email:</h5>{{this.$store.state.usuario.email}}</li>
            <li class="list-group-item"><h5>Rol:</h5>{{this.$store.state.usuario.rol}}</li>
            <li class="list-group-item"><h5>Estado:</h5>{{this.$store.state.usuario.status}}</li>
        </ul>
        </div>
    </div>
        </div>
      </v-container>
    </v-main>
  </v-app>
   
  </div>
</template>

<script informacion="javascript">

export default {
  name: "AccesoComponent",

  components: {
    
  },

  data: () => ({
    drawer: null,
    admins: [
      ['Categoría', 'mdi-information', 'Categoria'],
      ['Articulo', 'mdi-form-select', 'Articulo'],
    ],
    cruds: [
      ['Usuario', 'mdi-account-circle','Usuario'],
      
    ],
  }),
 
  methods:{
    salir(){
      this.$store.dispatch('salir');
    },
    ocultar(){
      const div = document.querySelector('#informacion');
      div.style.display = 'none';
    }
  }
  
};
</script>
