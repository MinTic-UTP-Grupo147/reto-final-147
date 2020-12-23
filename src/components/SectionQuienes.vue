<template>
  <v-div class="container-fluid text-center">
    <div class="row">
      <div class="col-md-4 mt-md-0 mt-3">
        <v-hover v-slot="{ hover }">
          <v-card class="mx-auto" color="grey lighten-4" max-width="600" height="590">
            <v-img
              :aspect-ratio="16 / 9"
              src="https://images.unsplash.com/photo-1474631245212-32dc3c8310c6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=624&q=80"
            >
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="d-flex transition-fast-in-fast-out white darken-2 v-card--reveal display-3 black--text"
                  style="height: 100%"
                >
                  Lo que nos guía...
                </div>
              </v-expand-transition>
            </v-img>

            <v-card-text class="pt-6" style="position: relative">
 <!--              <div class="font-weight-light grey--text title mb-2">
                Lo que nos guía...
              </div> -->
              <h3 class="display-1 font-weight-light primary--text mb-2">
                Nuestra razón de ser:
              </h3>
              <div class="font-weight-light title mb-2">
                <span>
                  En EDUSTEM estamos comprometidos con la co-creación de productos y
                  servicios para propiciar el crecimiento de la educación STEM, que equipe
                  a la comunidad educativa para liderar el mundo tecnológico del mañana. 
                </span>
              </div>
            </v-card-text>
          </v-card>
        </v-hover>
      </div>

      <div class="col-md-4 mt-md-0 mt-3">
        <v-hover v-slot="{ hover }">
          <v-card class="mx-auto" color="grey lighten-4" max-width="600" height="590">
            <v-img
              :aspect-ratio="16 / 9"
              src="https://images.unsplash.com/photo-1484353371297-d8cfd2895020?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=757&q=80"
            >
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="d-flex transition-fast-in-fast-out white darken-2 v-card--reveal display-3 black--text"
                  style="height: 100%"
                >
                  Lo más importante...
                </div>
              </v-expand-transition>
            </v-img>

            <v-card-text class="pt-6" style="position: relative">
<!--               <div class="font-weight-light grey--text title mb-2">
                For the perfect meal
              </div> -->
              <h3 class="display-1 font-weight-light primary--text mb-2">
                A quienes servimos:
              </h3>
              <div class="font-weight-light title mb-2">
                <span>
                  La comunidad educativa en general, instituciones,
                  docentes y estudiantes, así como también a aquellos entusiastas de
                  la tecnología que deseen aprender los conceptos que están impulsando
                  la sociedad de la información en campos como la robótica educativa,
                  la programación, IoT e Inteligencia artificial. 
                </span>
              </div>
            </v-card-text>
          </v-card>
        </v-hover>
      </div>

      <div class="col-md-4 mt-md-0 mt-3">
        <v-hover v-slot="{ hover }">
          <v-card class="mx-auto" color="grey lighten-4" max-width="600" height="590">
            <v-img
              :aspect-ratio="16 / 9"
              src="https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=748&q=80"
            >
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="d-flex transition-fast-in-fast-out white darken-2 v-card--reveal display-3 black--text"
                  style="height: 100%"
                >
                  Lo que ofrecemos...
                </div>
              </v-expand-transition>
            </v-img>

            <v-card-text class="pt-6" style="position: relative">
 <!--              <div class="font-weight-light grey--text title mb-2">
                For the perfect meal
              </div> -->
              <h3 class="display-1 font-weight-light primary--text mb-2">
                Nuestros productos:
              </h3>
              <div class="font-weight-light title mb-2">
                <span>
                  Nuestro catálogo incluye productos, en el ámbito de componentes y software
                  de aplicación, así como capacitación en programación y áreas
                  relacionadas con el desarrollo integral de la dinámica STEM.
                </span>
              </div>
            </v-card-text>
          </v-card>
        </v-hover>
      </div>
    </div>
  </v-div>  
</template>

<script>
export default {};
</script>

<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
</style>