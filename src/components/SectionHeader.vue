<template>
     <header>
        <v-tabs>
            <v-tab href="#">Inicio</v-tab>
            <v-tab href="#somos">Quiénes somos?</v-tab>
            <v-tab href="#servicios"
            >Servicios</v-tab>
            <v-tab href="#casos">Casos de éxito</v-tab>
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