<template>
  <div v-if="pokemons.length!==0">
    <b-container class="bv-example-row">
      <b-row class="justify-content-md-center">
        <Pokemon v-for="pokemon in pokemons" :key="pokemon.name" :pokemon="pokemon"></Pokemon>
      </b-row>
    </b-container>
  </div>
  <div v-else-if="pokemons.length==0 && mobile">Nous avons besoin de votre localisation pour afficher la liste des Pokémons à adopter</div>
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
    if(this.mobile) {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((res) => {
          const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${res.coords.latitude}&lon=${res.coords.longitude}`;
          axios.get(url).then((address) => {
                let country = address.data.address.country;
                if(country==="France"){
                  axios.get("https://pokeapi.co/api/v2/type/electric").then((pokemons) => {
                    for(let i = 0; i <pokemons.data.pokemon.length ; i++){
                      this.pokemons.push(pokemons.data.pokemon[i].pokemon);
                    }
                      }
                  );
                }else if(country==="United States"){
                  axios.get("https://pokeapi.co/api/v2/type/rock").then((pokemons) => {
                    for(let i = 0; i <pokemons.data.pokemon.length ; i++){
                      this.pokemons.push(pokemons.data.pokemon[i].pokemon);
                    }
                      }
                  );
                }
                else if(country==="Brazil"){
                  axios.get("https://pokeapi.co/api/v2/type/fire").then((pokemons) => {
                    for(let i = 0; i <pokemons.data.pokemon.length ; i++){
                      this.pokemons.push(pokemons.data.pokemon[i].pokemon);
                    }
                      }
                  );
                }
                else if(country==="Canada"){
                  axios.get("https://pokeapi.co/api/v2/type/ice").then((pokemons) => {
                    for(let i = 0; i <pokemons.data.pokemon.length ; i++){
                      this.pokemons.push(pokemons.data.pokemon[i].pokemon);
                    }
                      }
                  );
                }
              }
          );
        });
      }else {
        axios.get("https://pokeapi.co/api/v2/type/normal").then((pokemons) => {
              this.pokemons = pokemons.data.pokemon;
            }
        );
      }
    }
    else {
      axios.get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=500").then((res) => {
            this.pokemons = res.data.results;
          }
      );
    }
  },
  computed: {
    mobile() {
      return this.$store.getters.isMobile;
    },
  }
}
</script>

<style scoped>
.bv-example-row{
  margin : auto ;
}
</style>
