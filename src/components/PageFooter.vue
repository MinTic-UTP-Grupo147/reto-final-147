<template>
  <v-footer dark padless class="justify-space-around">
    <v-card flat tile class="primary lighten-1 white--text text-center">
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
          href="https://github.com/MinTic-UTP-Grupo147/reto-final-147"
        >
          <v-icon size="40px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-div class="container-fluid text-center">
        <div class="row">
          <div class="col-md-6 mt-md-0 mt-1">
            <v-card-text class="white--text pt-0">
              <p>
                Éste proyecto nace de la necesidad que tienen las naciones en via
                de desarrollo, para lograr por medio de la educación en ciencia y
                tecnología, la creación de compañias, empleos y demás.<br /><br />
                <b>¿Quisieras contribuir en ésta causa?</b>
              </p>
            </v-card-text>
          </div>

          <div class="col-md-6 mt-md-0 mt-1">
            <v-card-text class="white--text pt-0">
              <h5 class="text-uppercase">Nuestro equipo:</h5>
              <span>
                <strong>Geraldine Hernández</strong> - Medellin (COL) lghv21@gmail.com - (+57) 321 390 7740<br>
                <strong>José Chavarrio</strong> - Bogotá D.C. (COL) jchavarr78@gmail.com - (+57) 321 390 7741<br>
                <strong>Harold Avendaño</strong> - Sogamoso (COL) harolavendanoz18@gmail.com - (+57) 321 390 7742<br>
                <strong>Sebastian Jaramillo</strong> - La Ceja (COL) sebasjara@gmail.com - (+57) 321 390 7743<br>
                <strong>Juan Camilo Patiño</strong> - Bogotá D.C. (COL) jcpat78@gmail.com - (+57) 321 390 7744
              </span>
            </v-card-text>
          </div>
        </div>
      </v-div>
      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Edustem</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "PageFooter",
  data: () => ({
    icons: ["mdi-github"],
  }),
};
</script>