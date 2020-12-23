<template>
  <div>
    <v-container class="grey lighten-5">
      <v-row no-gutters>
        <v-col
        v-for="(item, index) of items"
          :key="index"
          cols="12"
          sm="3"
        >
          <v-card class="mx-auto" width="280" height="550">
            <v-img
              class="white--text align-end"
              width="280"
              height="200px"
              :src="item.src"
            >

            </v-img>
            <v-card-title class="primary--text">{{item.titulo}}</v-card-title>
            <v-card-subtitle class="pb-0 primary white--text" >{{item.subtitulo}}  </v-card-subtitle>

            <v-card-text class="primary--text">
              <div>{{item.texto}}</div>
              
            </v-card-text>
          </v-card>
          
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
    data: () => ({
          
      items: [
        { titulo:"Emprendimiento",
          subtitulo:"Pedro Giraldo, Ingeniero electromecánico – emprendedor independiente.",
          texto:"“Muchísimas gracias de verdad, el producto es muy bueno, es por ello que decidí comprar la licencia y mejor aún es el servicio pos-venta”",  
          src: 'https://www.newslinereport.com/online/nota_grupo-pinnacle-lanza-capacitaciones-en-espanol.jpg',
        },
        { titulo:"Estudiantes",
          subtitulo:"David Muñoz, Estudiante de Robótica Avanzada - ITCADR",
          texto:"“Excelentes equipos y ante todo son originales, me llego el pedido en tan solo 2 días, y la atención antes y después del pago fue excepcional.”",  
          src: 'https://universidadtamaulipeca.edu.mx/wp-content/uploads/2019/09/alu_brazomecatronica.png',
        },
        { titulo:"Academia",
          subtitulo:"Patricia Diaz, Asistente técnica, Biblioteca Nacional de Pereira",
          texto:"“La tecnología y la información actualmente son parte fundamental en la labor diaria de la biblioteca, es por ello que es de vital importancia la realización de este tipo de curso y capacitaciones, lo que nos permite brindarnos a la comunidad de mejor manera, llegar a ella como así también mostrar lo que hacemos.”",  
          src: 'https://4.bp.blogspot.com/_rgo3UtdnVYI/SRCms5y2tII/AAAAAAAAAAk/j_f00AffqAM/s320/IMG_0840.JPG',
        },
        { titulo:"Docentes",
          subtitulo:"Carlos Contreras, Rector institución educativa tecnisaber.",
          texto:"“Me gustaría que estos cursos de capacitación sigan implementándose por que son de mucha utilidad para estar al tanto de cómo llevar adelante una institución para que no se quede atrás con todo esto de las nuevas tecnologías, sino al contrario, que estas herramientas estén al servicio de la biblioteca y poder sacarles el máximo provecho para dar un servicio de excelencia a nuestros usuarios”",  
          src: 'https://www.fundaciontelefonica.com/wp-content/uploads/2009/06/02_06_2009_gua_0_11796_BIG.jpg',
        },        
      ],
    
}),
};
</script>