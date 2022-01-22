<template>
<div>
  <l-map
      :center="center"
      :zoom="zoom"
      class="map"
      ref="map"
      @update:zoom="zoomUpdated"
      @update:center="centerUpdated"
  >
    <l-tile-layer
        :url="url"
    >
    </l-tile-layer>
    <IconMap></IconMap>
  </l-map>
</div>
</template>

<script>

import { LMap, LTileLayer } from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css';
import IconMap from "@/components/IconMap";

export default {
name: "Radar",
  components: {
    LMap,
    LTileLayer,
    IconMap
  },
  data () {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      center: [ 49.1193089, 6.1757156 ],
      zoom: 12,
    }
  },
  created() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((res)=>{this.center=[res.coords.latitude, res.coords.longitude]});
    }
  },
  methods: {
    zoomUpdated (zoom) {
      this.zoom = zoom;
      console.log(this.markers)
    },
    centerUpdated (center) {
      this.center = center;
    }
  }
}
</script>

<style scoped>
.map {
  position: absolute;
  width: 100%;
  height: 80%;
  overflow :hidden
}
</style>
