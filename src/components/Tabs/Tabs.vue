<script setup>
import { ref } from 'vue'; // Importamos ref para la reactividad

// Controla la pestaña activa
const activeTab = ref(0);

// Definición de las pestañas con íconos y rutas
const tabs = [
  { icon: 'mdi-fire', route: '/fire' },
  { icon: 'mdi-star', route: '/busqueda' },
  { icon: 'mdi-view-grid', route: '/ajustes' },
  { icon: 'mdi-chat', route: '/chat' },
  { icon: 'mdi-account', route: '/account' },
];
</script>


<template>
  
  <v-container fluid>
      <v-bottom-navigation grow v-model="activeTab" class="elevation-12 ">
        <!-- Redirige a diferentes rutas cuando se selecciona una pestaña -->
        <router-link v-for="(tab, index) in tabs" :key="index" :to="tab.route" class="grey--text router-style">
          <v-icon>{{ tab.icon }}</v-icon>
        </router-link>
      </v-bottom-navigation>
  </v-container>
</template>



<style scoped>
.router-style {
  display: flex;
  flex: none;
  font-size: 0.75rem;
  justify-content: center;
  transition: inherit;
  width: 18%;
  padding: 20px;
  color: rgb(255, 255, 255)
}
.v-bottom-navigation {
  background-color: #333;
  /* Color de fondo de la barra de navegación */
  position: fixed;
  bottom: 0;
  width: 100%;
  /* Ajusta la altura aquí */
}


</style>