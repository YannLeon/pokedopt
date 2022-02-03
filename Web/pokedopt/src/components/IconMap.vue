<template>
 <div v-if="pokemon" @click="test()">
    <l-marker :lat-lng="pokemon.pos">
      <l-icon ref="icon" :icon-size="[32, 37]" :icon-anchor="[16, 37]">
        <img id="icon" :src="imageUrl" alt=""/>
      </l-icon>
      <l-popup>
        <div class="pokemon-descr">
          <h1>{{pokemonData.name}}</h1>
          <b-button class="btn-success" @click="followPokemon()">SUIVRE</b-button>
        </div>
      </l-popup>
    </l-marker>
 </div>
</template>

<script>
import { LIcon, LMarker, LPopup } from 'vue2-leaflet'
import axios from "axios";

export default {
  name: "IconMap",
  components: { LIcon, LMarker, LPopup },
  props:{
    pokemon: undefined
  },
  data(){
    return{
      pokemonData: '',
      imageUrl: ''
    }
  },
  methods: {
    followPokemon(){
      console.log(`Selected Pokemon: ${this.pokemonData.name}`);
      this.$store.commit('selectPokemon', this.pokemon);  
    }
  },
  created(){
    if(this.pokemon){
      axios.get(this.pokemon.pokemonUrl).then((res)=>{
            this.pokemonData = res.data;
            this.imageUrl = res.data.sprites.other["official-artwork"].front_default;
          }
      );
    }
  }
}

</script>

<style>
#icon {
  height: 75px;
  width: auto;
}
</style>
