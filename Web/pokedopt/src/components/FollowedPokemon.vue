<template>
    <div v-if="pokemonData">
        <l-marker :lat-lng="pokemon.pos">
            <l-icon ref="icon" :icon-size="[32, 37]" :icon-anchor="[16, 37]">
                <img id="icon" :src="imageUrl" alt=""/>
            </l-icon>
            <l-popup>
                <div class="pokemon-descr">
                    <h1>{{pokemonData.name}}</h1>
                </div>
            </l-popup>
        </l-marker>
    </div>
</template>
<script>
import { LIcon, LMarker, LPopup } from 'vue2-leaflet'
import axios from 'axios'

export default {
    name: 'FollowPokemon',
    components: { LIcon, LMarker, LPopup },
    data() {
        return {
            pokemon: undefined,
            pokemonData: undefined,
            imageUrl: ''
        }
    },
    created() {
        this.pokemon = this.$store.getters.getSelectedPokemon;
        if(this.pokemon){
            axios.get(this.pokemon.pokemonUrl).then((res)=>{
                this.pokemonData = res.data;
                this.imageUrl = res.data.sprites.other["official-artwork"].front_default;
                }
            );
        }
        else{
            console.log('No pokemon selected');
        }
    },
}
</script>
<style lang="css" scoped>
    
</style>