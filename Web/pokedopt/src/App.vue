<template>
  <div id="app">
    <NavBar></NavBar>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";

export default {
  name: 'App',
  components: {
    NavBar
  },
  created() {
    if(screen.width < 500){
      this.$store.commit('setMobile',true);
    }
    console.log(screen.width);
  },
}
</script>

<style>
 #app{
    display: flex;
    flex-flow: column;
    height: 100vh;
 }
</style>
