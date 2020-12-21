<template>
    
    <div>        
        <div class="row mt-md-5 mt-sm-5 mt-xs-5">    
            <div class="col-lg-6 col-xs-12" v-for="(servicio, index) of servicios" :key="index">
                <div class="d-flex justify-content-center align-items-center" >
                    <div class="p-3">
                        <img :src="servicio.imagen" alt="">
                    </div>
                    <div class="p-2">
                        <h2>{{servicio.id}}</h2>
                        <hr>
                        <p>
                            <samp>Tipo :{{servicio.nombre}}</samp> 
                            <br>
                            <samp>Año :{{servicio.codigo}}</samp>
                        </p>
                    </div>
                </div>      
            <div class="d-flex container-fluid justify-content-end pb-2 mt-n2">
            </div>
        </div>                                  
    </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name:'SectionNoticias',
    data(){
        return{
            servicios: null
        }
    },
    mounted(){
        axios
        .get('http://localhost:3000/api/articulo/list')
        .then(response =>{
            console.log(response);
            (this.servicios = response.data)
            
            })
    }
}
</script>