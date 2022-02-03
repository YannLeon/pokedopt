<template>
  <div class="navbar-container">
    <b-navbar toggleable="lg" type="light" variant="light">
      <img src="@/assets/logo_pokemon1.png" height="45px"
          width="100px"/>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="/">Home</b-nav-item>
        <b-nav-item href="/adopt">Adoption</b-nav-item>
        <b-nav-item href="/radar">Radar</b-nav-item>
          <b-form-input class="mr-sm-2" placeholder="Search your future pokémon"></b-form-input>
          <b-button variant="outline-success" class="my-2 my-sm-0" type="submit">Search</b-button>
      </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <b-button @click="mobile()">mobile</b-button>
  </div>
</template>

<script>
export default {
name: "NavBar",
methods: {
  mobile(){
    this.$store.commit('setMobile', true);
  }
},
}
</script>

<style scoped>
  .navbar-container{
    flex: 0 1 auto;
  }
</style>
