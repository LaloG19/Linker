<template>
  <v-bottom-navigation grow v-model="activeTab" class="elevation-12">
    <!-- Redirige a diferentes rutas cuando se selecciona una pestaña -->
    <v-btn v-for="(tab, index) in tabs" :key="index" :to="tab.route" class="grey--text" exact>
      <v-icon>{{ tab.icon }}</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script setup>
import { ref } from 'vue'; // Importamos ref para la reactividad

// Controla la pestaña activa
const activeTab = ref(0);

// Definición de las pestañas con íconos y rutas
const tabs = [
  { icon: 'mdi-fire', route: '/fire' },
  { icon: 'mdi-star', route: '/star' },
  { icon: 'mdi-view-grid', route: '/grid' },
  { icon: 'mdi-chat', route: '/chat' },
  { icon: 'mdi-account', route: '/account' },
];
</script>

<style scoped>
.v-btn {
  color: grey;
}

.v-bottom-navigation {
  background-color: #333;
  /* Color de fondo de la barra de navegación */
  position: fixed;
  display: flex;
  bottom: 0;
  width: 100%;
  height: 100vh;
  /* Ajusta la altura aquí */
}
</style>