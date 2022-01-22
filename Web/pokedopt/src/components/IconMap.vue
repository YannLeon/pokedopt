<template>
  <l-marker
      :key="1"
      :lat-lng="[ 43.591234,7.0911533 ]"
  >
    <l-icon
            ref="icon"
            :icon-size="[32, 37]"
            :icon-anchor="[16, 37]">
      <img id="ponyta-icon" src="@/assets/ponyta.png" alt="" />
    </l-icon>
  </l-marker>
</template>

<script>
import { LIcon, LMarker } from 'vue2-leaflet'
export default {
  name: "IconMap",
  components: { LIcon, LMarker },
}

</script>

<style>
#ponyta-icon {
  height: 75px;
  width: auto;
}
</style>
