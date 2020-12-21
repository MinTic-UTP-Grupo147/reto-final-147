<template>
  <v-app id="inspire">
    
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
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

          <!-- <v-list-group :value="true" prepend-icon="mdi-account-circle"> -->
            <!-- <template v-slot:activator>
              <v-list-item-title>Users</v-list-item-title>
            </template> -->

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

            <v-list-group no-action >
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title>Usuario</v-list-item-title>
                </v-list-item-content>
              </template>

              <v-list-item 
              v-for="([title, icon, ruta], i) in cruds" 
              :key="i" 
              link
              :to="{name:ruta}">
                <v-list-item-title v-text="title"></v-list-item-title>

                <v-list-item-icon>
                  <v-icon v-text="icon"></v-icon>
                </v-list-item-icon>
              </v-list-item>
            </v-list-group>
          <!-- </v-list-group> -->
        </v-list>
      </v-card>
    </v-navigation-drawer>

    <v-main class="grey lighten-2">
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

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
  
};
</script>
