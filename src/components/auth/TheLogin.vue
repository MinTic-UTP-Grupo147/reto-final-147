<template>
    <form class="w-50 p-3 position-absolute top-50 start-50 translate-middle border border-3">
            <img class="mb-4" src="https://placeimg.com/72/57/arch/grayscale" width="72" height="57">
            <h1 class="h3 mb-3 fw-normal">Please Login</h1>
        
            <label for="inputEmail" class="visually-hidden">Email address</label>
            <input 
            type="email" 
            class="form-control"
            id="inputEmail" 
            placeholder="Email address"
            aria-describedby="emailHelp"
            v-model="login.email"
            required>
        
            <label for="exampleInputPassword1" class="visually-hidden">Password</label>
            <input 
            type="password" 
            class="form-control" 
            placeholder="Password"
            id="exampleInputPassword1"
            v-model="login.password"
            required>
        
        
            <button 
            type="submit" 
            class="w-100 btn btn-lg btn-primary mt-5"
            @click.prevent="loginUser"
            >Sign in</button>
    </form>
</template>

<script>

import swal from 'sweetalert';
import axios from 'axios';
export default {
    data(){
        return{
            login:{
                email:'',
                password:'',
            }
        }
    },
    methods:{
        
        loginUser(){
            axios.post('http://localhost:3000/api/usuario/login', this.login)
                .then(response =>{
                    
                    return response.data;
                })
                .then(data =>{
                    this.$store.dispatch("guardarToken",data.tokenReturn);
                    this.$router.push('/acceso');
                    swal("Correcto","Login correcto","success");
                    console.log(data);
                })
                .catch(error =>{
                    swal("Invalido","Login incorrecto","error");
                    console.log(error);
                    return error;
                })
           

        }
    }
}
</script>