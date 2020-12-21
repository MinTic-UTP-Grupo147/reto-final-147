<template>
    
    <div>
        <div class="row mt-md-5 mt-sm-5 mt-xs-5">    
            <div class="col-lg-6 col-xs-12" v-for="(movie, index) of movies" :key="index">
                <div class="d-flex justify-content-center align-items-center" >
                    <div class="p-3">
                        <img :src="movie.Poster" alt="movie poster">
                    </div>
                    <div class="p-2">
                        <h2>{{movie.Title}}</h2>
                        <hr>
                        <p>
                            <samp>Tipo :{{movie.Type}}</samp> 
                            <br>
                            <samp>Año :{{movie. Year}}</samp>
                        </p>
                    </div>
                </div>      
            <div class="d-flex container-fluid justify-content-end pb-2 mt-n2">
                <a :href="'https://www.imdb.com/title/' + movie.imdbID" target="_blank" class="btn btn-outline-info">Info</a>
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
            (this.servicios = response.data.Search)
            
            })
    }
}
</script>