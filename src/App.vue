<template>
  <v-app class="background-container">
     <router-view />
  </v-app>
</template>


<script setup>
import { RouterView, useRoute } from 'vue-router'

</script>

<style scoped>

.background-container {
   margin: 0;
   padding: 0;
   width: 100vw;
   overflow: hidden;
   background-color: #191D22;
   color: white;
   overflow: hidden;

}



</style>
