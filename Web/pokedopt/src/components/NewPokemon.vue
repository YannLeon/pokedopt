<template>
  <div>
    <b-container class="bv-example-row">
      <h5>New Pokémons</h5>
      <b-row>
        <Pokemon v-for="pokemon in pokemons" :key="pokemon.name" :pokemon="pokemon"></Pokemon>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";
import Pokemon from "@/components/Pokemon";

export default {
  name: "NewPokemon",
  components: {
    Pokemon
  },
  data(){
    return{
      pokemons: []
    }
  },
  created() {
    axios.get("https://pokeapi.co/api/v2/pokemon/?offset=50&limit=3").then((res)=>{
          this.pokemons=res.data.results
        }
    );
  }
}
</script>

<style scoped>

</style>
