<template>
  <div>
    
  <section-header></section-header>
  <section class="container-fluid" style="margin-top:10px;">
   <div class="d-flex justify-content-center"><h2>Sobre nosotros</h2></div>
              <v-divider inset></v-divider>
              <section-quienes id="somos"></section-quienes>            
  </section>
  
     <section class="container-fluid " style="margin-top:10px;">
            <div class="d-flex justify-content-center "><h2>Servicios</h2></div>
            <div class="row justify-content-around" >
              <v-divider inset></v-divider>
              <section-noticias id="servicios" ></section-noticias>
            </div>
     </section>
     
     <page-footer></page-footer>            
</div>
</template>

<script>
import PageFooter from '../components/PageFooter.vue'
import SectionHeader from '../components/SectionHeader.vue'
import SectionNoticias from '../components/SectionNoticias.vue'
import SectionQuienes from '../components/SectionQuienes.vue'

export default {
  components: { SectionHeader, SectionNoticias, PageFooter, SectionQuienes },
  
}
</script>,
    SectionQuienes