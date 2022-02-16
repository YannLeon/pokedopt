<template>
  <b-card
    :title="namePokemon"
    :img-src="image"
    img-alt="Image"
    img-top
    tag="article"
    :style="{'max-width': size}"
    class="m-1"
  >
    <b-card-text> A great pokemon </b-card-text>

    <b-button href="#" variant="primary">Adopt it!</b-button>
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
      size: "15rem"
    };
  },
  props: {
    pokemon: Object,
  },
  created() {
    if(this.mobile){
      this.size = "10rem";
    }
      axios.get(this.pokemon.url).then((res) => {
        this.namePokemon = res.data.name;
        this.image = res.data.sprites.other["official-artwork"].front_default;
      });
  },
  computed: {
    mobile() {
      return this.$store.getters.isMobile;
    },
  }
};
</script>

<style scoped>
</style>
