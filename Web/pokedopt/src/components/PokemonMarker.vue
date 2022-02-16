<template>
 <div v-if="pokemon">
    <l-marker :lat-lng="pokemon.pos">
      <l-icon ref="icon" :icon-size="[32, 37]" :icon-anchor="[16, 37]">
        <img id="icon" :src="imageUrl" alt=""/>
      </l-icon>
      <l-popup>
        <div class="pokemon-descr">
          <h1>{{pokemonData.name}}</h1>
          <b-button v-if="!$store.getters.isMobile" class="btn-success" @click="followPokemon()">SUIVRE</b-button>
          <b-button class="btn-success" @click="show=true;displayMoreInfos();">Afficher Infos</b-button>
        </div>
      </l-popup>
    </l-marker>
   <InfosPokemon v-if="displayInfos" @closeInfos="closeInfos()"  :show="show" :pokemonName="pokemonData.name" :attacks="attacks"/>
 </div>
</template>

<script>
import { LIcon, LMarker, LPopup } from 'vue2-leaflet'
import axios from "axios";
import InfosPokemon from "./InfosPokemon";

export default {
  name: "PokemonMarker",
  components: {InfosPokemon, LIcon, LMarker, LPopup },
  props:{
    pokemon: undefined,
  },
  data(){
    return{
      pokemonData: '',
      imageUrl: '',
      show: false,
      displayInfos: false,
      attacks: []
    }
  },
  methods: {
    followPokemon(){
      console.log(`Selected Pokemon: ${this.pokemonData.name}`);
      this.$store.commit('selectPokemon', this.pokemon);
    },
    displayMoreInfos(){
      if(this.attacks.length===0){
        for (const info of this.pokemonData.stats){
          this.attacks.push(info.stat.name);
          this.attacks.push(info.base_stat);
        }
        this.attacks.push("weight");
        this.attacks.push(this.pokemonData.weight);
      }
      this.displayInfos = true;
    },
    closeInfos(){
      this.displayInfos = false;
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
