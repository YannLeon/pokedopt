<template>
  <div v-if="pokemons.length!==0">
    <b-container class="bv-example-row">
      <b-row class="justify-content-md-center">
        <Pokemon v-for="pokemon in pokemons" :key="pokemon.name" :pokemon="pokemon"></Pokemon>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";
import Pokemon from "@/components/Pokemon";

export default {
  name: "AdoptPokemon",
  components: {
    Pokemon
  },
  data(){
    return{
      pokemons: []
    }
  },
  created() {
    axios.get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1000").then((res)=>{
          this.pokemons=res.data.results
        }
    );
  }
}
</script>

<style scoped>
.bv-example-row{
  margin : auto ;
}
</style>
