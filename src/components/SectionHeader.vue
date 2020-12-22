<template>
     <header>
       <v-app-bar class="d-sm-none">
      <v-app-bar-nav-icon 
      @click="drawer = !drawer;"></v-app-bar-nav-icon>
         
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
           

              <v-list-item 
              v-for="([title, icon,], i) in admins" :key="i" 
              >
                <v-list-item-title v-text="title"></v-list-item-title>

                <v-list-item-icon>
                  <v-icon v-text="icon"></v-icon>
                </v-list-item-icon>
              </v-list-item>
                    
        </v-list>
      </v-card>
    </v-navigation-drawer>

        <v-tabs class="d-none d-sm-flex">
            <v-tab href="#">Inicio</v-tab>
            <v-tab href="#somos">Quiénes somos?</v-tab>
            <v-tab href="#services"
            >Servicios</v-tab>
            <v-tab href="#casos">Casos de éxito</v-tab>
        <v-tab> 
      <v-btn
      icon
      class="mr-5"
      href="login">
        <v-icon>mdi-login</v-icon>
        <span>Login</span>
      </v-btn>
        </v-tab>
        </v-tabs>
       
            <!-- Imagen  carousel -->
            <v-carousel>
            <v-carousel-item
                v-for="(item,i) in items"
                :key="i"
                :src="item.src"
                reverse-transition="fade-transition"
                transition="fade-transition"
            ></v-carousel-item>
            </v-carousel>
           
        </header>    
</template>

<script>
export default {
    name: 'SectionHeader',
    data: () => ({
      drawer: null,
    admins: [
      ['Categoría', 'mdi-information', 'Categoria'],
      ['Articulo', 'mdi-form-select', 'Articulo'],
    ],
    cruds: [
      ['Usuario', 'mdi-account-circle','Usuario'],
      
    ],
    
      items: [
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
        },
      ],
    
}),

} 
</script>