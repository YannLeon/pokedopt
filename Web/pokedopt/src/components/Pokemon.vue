<template>
  <b-card
      :title="namePokemon"
      :img-src="image"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-2"
  >
    <b-card-text>
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </b-card-text>

    <b-button href="#" variant="primary">Go somewhere</b-button>
  </b-card>
</template>

<script>
import axios from "axios";

export default {
name: "Pokemon",
  components: {},
  data(){
    return {
      namePokemon: "",
      image: ""
    }
  },
  props:{
    pokemon: Object
  },
  created(){
    axios.get(this.pokemon.url).then(
        (res)=>{
          this.namePokemon=res.data.name;
        this.image=res.data.sprites.front_default;
        }
        );
  }
}
</script>

<style scoped>

</style>
