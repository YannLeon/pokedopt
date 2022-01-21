<template>
  <div id="app">
    <NavBar></NavBar>
    <div v-if="pokemons.length!==0">
      <b-container class="bv-example-row">
        <b-row>
          <Pokemon v-for="pokemon in pokemons" :key="pokemon.name" :pokemon="pokemon" class="m-1"></Pokemon>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import Pokemon from "@/components/Pokemon";
import axios from "axios";
import NavBar from "@/components/NavBar";

export default {
  name: 'App',
  components: {
    NavBar,
    Pokemon
  },
  data(){
    return{
      pokemons: []
    }
  },
  created() {
    axios.get("https://pokeapi.co/api/v2/pokemon/?offset=20&limit=1000").then((res)=>this.pokemons=res.data.results);
  }
}
</script>

<style>
@import'~bootstrap/dist/css/bootstrap.css';
</style>
