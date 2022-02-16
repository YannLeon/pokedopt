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
      <l-tile-layer :url="url"></l-tile-layer>
      <l-circle-marker :lat-lng="userPos" :radius="6" :color="'blue'"></l-circle-marker>
      <div v-if="!$store.getters.isMobile">
        <PokemonMarker v-for="pokemon in detectedPokemons" :key="pokemon.pokemonUrl" :pokemon="pokemon"></PokemonMarker>
      </div>
      <div v-else>
        <div v-if="selectedPokemon">
          <PokemonMarker :pokemon="$store.getters.getSelectedPokemon"></PokemonMarker>
          <div v-if="routeToPokemon.length">
            <l-polyline :lat-lngs="routeToPokemon"></l-polyline>
          </div>
        </div>
      </div>
    </l-map>
  </div>
</template>

<script>

import { LMap, LTileLayer, LCircleMarker, LPolyline } from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css';
import PokemonMarker from "@/components/PokemonMarker";
import axios from 'axios';

export default {
name: "Radar",
  components: {
    LMap,
    LTileLayer,
    LCircleMarker,
    PokemonMarker,
    LPolyline
  },
  data () {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      center: [ 43.591450, 7.082382 ],
      userPos: [43.615535, 7.072128],
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
          pos: [43.623209, 7.076777],
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
        },
        {
          pos: [43.612080, 7.060562],
          pokemonUrl: 'https://pokeapi.co/api/v2/pokemon/raichu/'
        },
        {
          pos: [43.607035, 7.073253],
          pokemonUrl: 'https://pokeapi.co/api/v2/pokemon/magnemite/'
        },
        {
          pos: [43.601514, 7.095241],
          pokemonUrl: 'https://pokeapi.co/api/v2/pokemon/magneton/'
        },
        {
          pos: [43.608813, 7.088507],
          pokemonUrl: 'https://pokeapi.co/api/v2/pokemon/voltorb/'
        },
        {
          pos: [43.601042, 7.064822],
          pokemonUrl: 'https://pokeapi.co/api/v2/pokemon/electabuzz/'
        },
        {
          pos: [43.597644, 7.058089],
          pokemonUrl: 'https://pokeapi.co/api/v2/pokemon/jolteon/'
        },
        {
          pos: [43.596607, 7.073192],
          pokemonUrl: 'https://pokeapi.co/api/v2/pokemon/zapdos/'
        },
        {
          pos: [43.591435, 7.061354],
          pokemonUrl: 'https://pokeapi.co/api/v2/pokemon/chinchou/'
        },
        {
          pos: [43.613162, 7.083404],
          pokemonUrl: 'https://pokeapi.co/api/v2/pokemon/lanturn/'
        },
        {
          pos: [43.590173, 7.055227],
          pokemonUrl: 'https://pokeapi.co/api/v2/pokemon/pichu/'
        },
        {
          pos: [43.605840, 7.055941],
          pokemonUrl: 'https://pokeapi.co/api/v2/pokemon/mareep/'
        },
        {
          pos: [43.601475, 7.085880],
          pokemonUrl: 'https://pokeapi.co/api/v2/pokemon/flaaffy/'
        },
        {
          pos: [43.618850, 7.064325],
          pokemonUrl: 'https://pokeapi.co/api/v2/pokemon/ampharos/'
        },
        {
          pos: [43.618036, 7.077492],
          pokemonUrl: 'https://pokeapi.co/api/v2/pokemon/elekid/'
        },
        {
          pos: [43.620771, 7.058200],
          pokemonUrl: 'https://pokeapi.co/api/v2/pokemon/raikou/'
        },
        {
          pos: [43.626239, 7.069633],
          pokemonUrl: 'https://pokeapi.co/api/v2/pokemon/electrike/'
        },
      ],
      apiKey: '5b3ce3597851110001cf624820b606c7e09545fe87a796c8b3c78860',
      routeToPokemon: []
    }
  },
  created() {
    if ("geolocation" in navigator) {
      console.log('geolocation !');
      navigator.geolocation.getCurrentPosition((res)=>{
        this.center=[res.coords.latitude, res.coords.longitude];
        this.userPos= this.center;
      });
    }
    if(this.$store.getters.isMobile){
      const start = `${this.userPos[1]}, ${this.userPos[0]}`;
      const end = `${this.selectedPokemon.pos[1]},${this.selectedPokemon.pos[0]}`;
      const url = `https://api.openrouteservice.org/v2/directions/driving-car?api_key=${this.apiKey}&start=${start}&end=${end}`;
      axios.get(url).then((res)=>{
        const temp = res.data.features[0].geometry.coordinates;
        temp.forEach(coord => {
          this.routeToPokemon.push([coord[1], coord[0]]);
        })
      });
    }
  },
  computed:{
    selectedPokemon(){
      return this.$store.getters.getSelectedPokemon;
    }
  },
  methods: {
    zoomUpdated (zoom) {
      this.zoom = zoom;
      navigator.geolocation.getCurrentPosition((res)=>{this.userPos=[res.coords.latitude, res.coords.longitude]});
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

  .infosPokemon{
    display: flex;
  }
</style>
