<template>
  <div>
  <b-navbar type="light" variant="light">
    <img src="@/assets/logo_pokemon1.png" height="50px"
         width="100px"/>
    <b-navbar-nav>
      <b-nav-item href="#">Home</b-nav-item>
      <b-nav-item href="#">Adoption</b-nav-item>
      <b-nav-item href="#">Radar</b-nav-item>
        <b-form-input class="mr-sm-2" placeholder="Search your future pokémon"></b-form-input>
        <b-button variant="outline-success" class="my-2 my-sm-0" type="submit">Search</b-button>
    </b-navbar-nav>
  </b-navbar>
</div>
</template>

<script>
export default {
name: "NavBar"
}
</script>

<style scoped>

</style>
