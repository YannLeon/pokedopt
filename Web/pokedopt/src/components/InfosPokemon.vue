<template>
  <div class="sideBar">
    <b-sidebar id="sidebar-right" :visible="show" :title="pokemonName" right no-header shadow >
      <template #default="{ hide }">
        <b-button variant="outline-success" block @click="hide();closeInfos()">X</b-button>
        <h3>{{pokemonName}}</h3>
      <div class="px-3 py-2">
        <div>
          <b>{{attacks[0]}}</b>
          {{attacks[1]}}
        </div>
        <div>
          <b>{{attacks[2]}}</b>
          {{attacks[3]}}
        </div>
        <div>
          <b>{{attacks[4]}}</b>
          {{attacks[5]}}
        </div>
        <div>
          <b>{{attacks[6]}}</b>
          {{attacks[7]}}
        </div>
        <div>
          <b>{{attacks[8]}}</b>
          {{attacks[9]}}
        </div>
        <div>
          <b>{{attacks[10]}}</b>
          {{attacks[11]}}
        </div>
        <div>
          <b>{{attacks[12]}}</b>
          {{attacks[13]}}
        </div>
      </div>
      </template>
    </b-sidebar>
  </div>
</template>

<script>
export default {
  name: "InfosPokemon",
  props: {
    show : Boolean,
    pokemonName: String,
    attacks: [],
  },
  methods:{
    closeInfos(){
      this.$emit('closeInfos');
    }
  }
}
</script>

<style>
.sideBar #sidebar-right{
  width: 30%;
}
</style>
