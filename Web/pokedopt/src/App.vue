<template>
  <div id="app">
    <b-alert show>Pokemon</b-alert>
    {{response}}
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'App',
  components: {
  },
  data(){
    return {
      response: []
    }
  },
  created(){
      axios.get("https://pokeapi.co/api/v2/pokemon").then((res)=>this.response=res.data);
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
