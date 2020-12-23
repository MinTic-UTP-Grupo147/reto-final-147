<template>
  <v-app id="app">
    <router-view />
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",

  components: {
    HelloWorld,
  },

  data: () => ({
    
  }),
  created(){
    this.$store.dispatch("autoLogin");
  },
  computed:{
    logueado(){
      return this.$store.state.usuario;
    }
  },
  methods:{
    salir(){
      this.$store.dispatch("salir");
    }
  },
};
</script>
