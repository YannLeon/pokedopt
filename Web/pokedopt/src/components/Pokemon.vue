<template>
  <b-card
    :title="namePokemon"
    :img-src="image"
    img-alt="Image"
    img-top
    tag="article"
    :style="{'max-width': size}"
    class="m-1"
    @mouseenter="hover = true"
    @mouseleave="hover = false" 
  >
    <div class="overlay" v-if="hover">
      <b-button href="#" variant="primary">Adopt it!</b-button>
    </div>
    <b-card-text> A great pokemon </b-card-text>
  </b-card>
</template>

<script>
import axios from "axios";

export default {
  name: "Pokemon",
  components: {},
  data() {
    return {
      namePokemon: "",
      image: "",
      size: "15rem",
      hover: false
    };
  },
  props: {
    pokemon: Object,
  },
  created() {
    if(this.mobile){
      this.size = "10rem";
      axios.get(this.pokemon.url).then((res) => {
        this.namePokemon = res.data.name;
        this.image = res.data.sprites.other["official-artwork"].front_default;
      });
    }else {
      axios.get(this.pokemon.url).then((res) => {
        this.namePokemon = res.data.name;
        this.image = res.data.sprites.other["official-artwork"].front_default;
      });
    }
  },
  computed: {
    mobile() {
      return this.$store.getters.isMobile;
    },
  }
};
</script>

<style scoped>
  .card-container{
    position: relative;
    width: auto;
  }

  .overlay{
    position: absolute;
    z-index: 99;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.42);
  }
</style>
