<template>
    <v-hover v-slot="{ hover }" >
      <v-card
        class="mx-auto"
        color="grey lighten-4"
        max-width="600"
      >
        <v-img
          :aspect-ratio="16/9"
          src="https://cdn.vuetifyjs.com/images/cards/kitchen.png"
        >
          <v-expand-transition>
            <div
              v-if="hover"
              class="d-flex transition-fast-in-fast-out blue darken-2 v-card--reveal display-3 black--text"
              style="height: 100%;"
            >
              $14.99
            </div>
          </v-expand-transition>
        </v-img>
        
        <v-card-text
          class="pt-6"
          style="position: relative;"
        >         
          <div class="font-weight-light grey--text title mb-2">
            For the perfect meal
          </div>
          <h3 class="display-1 font-weight-light blue--text mb-2">
            QW cooking utensils
          </h3>
          <div class="font-weight-light title mb-2">
            Our Vintage kitchen utensils delight any chef.<br>
            Made of bamboo by hand
          </div>
        </v-card-text>
      </v-card>
    </v-hover>
</template>

<script>
export default {
    
}
</script>

<style>
.v-card--reveal {
align-items: center;
bottom: 0;
justify-content: center;
opacity: .5;
position: absolute;
width: 100%;
}
</style>