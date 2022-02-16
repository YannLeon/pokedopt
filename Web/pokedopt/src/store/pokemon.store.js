import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        mobile: false,
        selectedPokemon: undefined
    },
    getters:{
        isMobile(state){
            return state.mobile;
        },
        getSelectedPokemon(state){
            if(state.mobile){
                return  {
                    pos: [43.591010, 7.080729],
                    pokemonUrl: 'https://pokeapi.co/api/v2/pokemon/ponyta'
                  }
            }else{
                return state.selectedPokemon;
            }
        }
    },
    mutations: {
        selectPokemon(state, pokemon) {
            state.selectedPokemon = pokemon;
        },
        setMobile(state, status){
            state.mobile = status;
        }
    }
})
