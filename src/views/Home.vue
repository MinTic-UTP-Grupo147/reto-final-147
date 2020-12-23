<template>
  <div>
    <section-header></section-header>
    <section class="container-fluid" style="margin-top: 10px">
      <v-divider inset></v-divider>
      <div class="blue--text d-flex justify-content-center"><h2>Sobre nosotros</h2></div>
      
      <section-quienes id="somos"></section-quienes>
    </section>

    <section class="container-fluid blue lighten-2" style="margin-top: 10px">
      <v-divider inset></v-divider>
      <div id="servicios" class="white--text d-flex justify-content-center"><h2>Servicios</h2></div>
      <div class="row justify-content-around">
        
        <section-noticias></section-noticias>
      </div>
    </section>
    <section class="container-fluid" style="margin-top: 10px">
      <v-divider inset></v-divider>
      <div id="casos_de_exito" class="blue--text d-flex justify-content-center"><h2>Casos de éxito</h2></div>
      <div class="row justify-content-around">
        
        <section-casos></section-casos>
      </div>
    </section>

    <page-footer></page-footer>
  </div>
</template>

<script>
import PageFooter from "../components/PageFooter.vue";
import SectionCasos from "../components/SectionCasos.vue";
import SectionHeader from "../components/SectionHeader.vue";
import SectionNoticias from "../components/SectionNoticias.vue";
import SectionQuienes from "../components/SectionQuienes.vue";

export default {
  components: {
    SectionHeader,
    SectionNoticias,
    PageFooter,
    SectionQuienes,
    SectionCasos,
  },
};
</script>,
    SectionQuienes