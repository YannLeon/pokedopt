<template>
  <div id="mainPage">
    <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        background="#ababab"
        img-width="1024"
        img-height="480"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
          img-src="/static/banniere_poke.png"
      ></b-carousel-slide>
      <b-carousel-slide
          img-src="/static/banniere_poke2.png"
      ></b-carousel-slide>
    </b-carousel>
    <b-container id="contentMainPage" class="bv-example-row">
      <b-row class="justify-content-md-left">
        <b-col>
          <Recommendation></Recommendation>
        </b-col>
        <b-col>
    <NewPokemon></NewPokemon>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>

import Recommendation from "@/components/Recommendation";
import NewPokemon from "@/components/NewPokemon";

export default {
name: "MainPage",
  components: {
  Recommendation,
    NewPokemon
  },
  data() {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart() {
      this.sliding = true
    },
    onSlideEnd() {
      this.sliding = false
    }
  },
  mounted() {
  // hidden arrow text carrousel
  document.getElementsByClassName("sr-only").item(0).style.display="none";
  document.getElementsByClassName("sr-only").item(1).style.display="none";
  }
}
</script>

<style scoped>
  #mainPage{
    margin: 10px 50px 0px 50px;
  }

  #contentMainPage{
    margin-top: 20px;
  }
</style>
