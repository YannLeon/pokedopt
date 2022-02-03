<template>
<div class="map-container">
  <l-map
      :center="center"
      :zoom="zoom"
      class="map"
      ref="map"
      @update:zoom="zoomUpdated"
      @update:center="centerUpdated"
  >
    <l-tile-layer
        :url="url"
    >
    </l-tile-layer>
    <div v-if="!mobile"> 
      <IconMap v-for="pokemon in detectedPokemons" :key="pokemon.pokemonUrl" :pokemon="pokemon"></IconMap>
    </div>
    <div v-else>
      <FollowedPokemon></FollowedPokemon>
    </div>
  </l-map>
</div>
</template>

<script>

import { LMap, LTileLayer } from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css';
import IconMap from "@/components/IconMap";
import FollowedPokemon from './FollowedPokemon.vue';

export default {
name: "Radar",
  components: {
    LMap,
    LTileLayer,
    IconMap,
    FollowedPokemon
  },
  data () {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      center: [ 43.591450, 7.082382 ],
      zoom: 12,
      detectedPokemons: [
        {
          pos: [43.587852, 7.072174],
          pokemonUrl: 'https://pokeapi.co/api/v2/pokemon/pikachu'
        },
        {
          pos: [43.591010, 7.080729],
          pokemonUrl: 'https://pokeapi.co/api/v2/pokemon/ponyta'
        },
        {
          pos: [43.595710, 7.084463],
          pokemonUrl: 'https://pokeapi.co/api/v2/pokemon/1/'
        },
        {
          pos: [43.593809, 7.068882],
          pokemonUrl: 'https://pokeapi.co/api/v2/pokemon/2/'
        },
        {
          pos: [43.639682, 7.005503],
          pokemonUrl: 'https://pokeapi.co/api/v2/pokemon/3/'
        },
        {
          pos: [43.620563, 7.071847],
          pokemonUrl: 'https://pokeapi.co/api/v2/pokemon/4/'
        },
        {
          pos: [43.613319, 7.071774],
          pokemonUrl: 'https://pokeapi.co/api/v2/pokemon/5/'
        },
        {
          pos: [43.626019, 7.045348],
          pokemonUrl: 'https://pokeapi.co/api/v2/pokemon/6/'
        }
      ],
    }
  },
  created() {
    if ("geolocation" in navigator) {
      console.log('geolocation !');
      navigator.geolocation.getCurrentPosition((res)=>{this.center=[res.coords.latitude, res.coords.longitude]});
    }
  },
  computed:{
    mobile(){
      return this.$store.getters.isMobile;
    }
  },
  methods: {
    zoomUpdated (zoom) {
      this.zoom = zoom;
    },
    centerUpdated (center) {
      this.center = center;
    }
  }
}
</script>

<style scoped>
  .map-container{
    width: 100%;
    height: 100%;
    flex: 1 1 auto;
  }

  .map {
    position: relative;
    width: 100%;
    height: 100%;
  }
</style>
