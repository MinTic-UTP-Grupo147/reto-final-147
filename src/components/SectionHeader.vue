<template>
  <header>
    <v-app-bar app class="d-sm-none">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" fixed temporary>
      <v-card class="mx-auto" width="300">
        <v-list>
          <v-list-item>


            <v-list-item-title><a href="#inicio" class="nav-link">Inicio</a></v-list-item-title>

                        <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
          </v-list-item>

          <v-list-item v-for="([title, icon, ruta], i) in admins" :key="i">

            <v-list-item-title> <a v-text="title" :href="ruta" class="nav-link"></a> </v-list-item-title>

            <v-list-item-icon>
              <v-icon v-text="icon"></v-icon>
            </v-list-item-icon>

          </v-list-item>
        </v-list>
      </v-card>
    </v-navigation-drawer>
    
    <v-app-bar app class="success justify-space-around d-none d-sm-flex">
<!--       <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://www.flaticon.com/svg/static/icons/svg/3523/3523020.svg"
          transition="scale-transition"
          width="30"
        />

        <h3 class="mr-2 primary--text">Edustem</h3>
      </div> -->
      <v-tabs class="d-none d-sm-flex justify-space-around">
        <v-tab><a href="#inicio" class="nav-link">Inicio</a></v-tab>
        <v-tab><a href="#somos" class="nav-link">Quiénes somos?</a></v-tab>
        <v-tab><a href="#servicios" class="nav-link">Servicios</a></v-tab>
        <v-tab><a href="#casos_de_exito" class="nav-link">Casos de éxito</a></v-tab>
      </v-tabs>
      <v-spacer></v-spacer>

      <v-btn icon cols="12" class="mr-5 primary--text" href="login">
        <v-icon>mdi-login</v-icon>
        <span>Login</span>
      </v-btn>
    </v-app-bar>

    <!-- Imagen  carousel -->
    <v-carousel id="inicio" height="500px">
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
        max-height="500px"
      ></v-carousel-item>
    </v-carousel>
  </header>
</template>

<script>
export default {
  name: "SectionHeader",
  data: () => ({
    drawer: null,
    admins: [
      ["Quienes somos?", "mdi-information", "#somos"],
      ["Servicios", "mdi-server", "#servicios"],
      ["Casos de exito", "mdi-form-select", "#casos_de_exito"],
      ["Login", "mdi-login", "login"],
    ],

    items: [
      {
        src:
          "https://blog-en.webroot.com/wp-content/uploads/2019/09/26142301/blog-800x400-STEM.jpg",
      },
      {
        src:
          "https://images.unsplash.com/photo-1563520239648-a24e51d4b570?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80",
      },
      {
        src:
          "https://images.unsplash.com/photo-1596496181861-5fc5346995ba?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      },
      {
        src:
          "https://images.unsplash.com/photo-1603354350317-6f7aaa5911c5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80",
      },
      {
        src:
          "https://cdn.pixabay.com/photo/2019/09/25/10/29/color-4503279_960_720.jpg",
      },
/*       {
        src:
          "https://i.ibb.co/Z67cWc1/EDUSTEM-TRAINING.png",
      }, */

      
    ],
  }),
};
</script>