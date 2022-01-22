<template>
<div>
  <b-container class="bv-example-row">
    <h5>Recommendation for you</h5>
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
name: "Recommendation",
  components: {
    Pokemon
  },
  data(){
    return{
      pokemons: []
    }
  },
  created() {
    axios.get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=5").then((res)=>{
          this.pokemons=res.data.results
        }
    );
  }
}
</script>

<style scoped>

</style>
