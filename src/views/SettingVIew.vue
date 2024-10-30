<template>
    <v-container fluid>
        <!-- Sección de Tinder Plus -->
        <v-card class="pa-4 mb-2 mt-4 mb-10" color="#212121" flat>
            <v-row align="center" justify="center">
                <v-icon color="pink" large class="mr-2">mdi-fire</v-icon>
                <div>
                    <div class="text-h6 font-weight-bold">Linker+</div>
                    <div class="text-caption">Unlimited Likes & more!</div>
                </div>
            </v-row>
        </v-card>
        <!-- Contenedor principal con posición relativa para controlar el botón -->
        <div style="position: relative;">
            <!-- Botón flotante sobre la tarjeta -->
            <v-row align="center" justify="center"
                style="position: absolute; top: -20px; left: 55%; transform: translateX(-50%); z-index: 10;">
                <v-btn icon color="white" class="elevation-5" style="width: 50px; height: 50px; border-radius: 50%;">
                    <v-icon size="35" color="black">mdi-lightning-bolt</v-icon>
                </v-btn>
            </v-row>

            <!-- Tarjeta con contenido -->
            <v-card class="pa-2 mb-2 mt-5" color="#212121" flat>
                <v-row align="center" justify="center">
                    <v-col cols="auto" class="text-center">
                        <!-- Espacio opcional para otros elementos -->
                    </v-col>
                </v-row>

                <!-- Texto debajo del botón circular -->
                <v-row align="center" justify="center" class="text-center">
                    <div class="text-h6 font-weight-bold">0 remaining</div>
                </v-row>
                <v-row align="center" justify="center" class="text-center">
                    <a href="#" class="text-decoration-none pb-2" style="color: #9b59b6;">Get more Boosts</a>
                </v-row>
            </v-card>
        </div>


        <!-- Sección de Modo Incógnito -->
        <v-card class="pa-4 mb-2 mt-5" color="#212121" flat>
            <v-row align="center" justify="center">
                <v-col cols="auto" class="text-center">
                    <v-btn icon color="white" :width="'13vw'" :height="'13vw'">
                        <v-icon size="35" color="black">mdi-incognito</v-icon>
                    </v-btn>
                </v-col>
            </v-row>
            <v-row align="center" justify="center" class="text-center">
                <div class="text-h6 font-weight-bold pb-2">Go Incognito</div>
            </v-row>
        </v-card>

        <!-- Sección de Configuración de Cuenta -->
        <v-card class="pa-4 mt-5 mb-10" color="#1e1e1e" flat>
            <div class="text-h6 font-weight-bold mb-3">Account settings</div>
            <v-list dense class="black-background">
                <v-list-item v-for="(item, index) in settingsItems" :key="index" @click="onItemClick(item)">
                    <v-list-item-content>
                        <v-list-item-title x class="icon-space">{{ item.title }} <v-icon>mdi-chevron-right</v-icon>
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-card>

        <Tabs />
    </v-container>
</template>

<script setup>
import { ref } from 'vue';
import Tabs from '../components/Tabs/Tabs.vue';

const settingsItems = ref([
    { title: 'Manage payment account' },
    { title: 'Restore purchases' },
    { title: 'Email' },
    { title: 'Phone number' },
    { title: 'Personal Info' },
    { title: 'Account' },
]);

function onItemClick(item) {
    console.log(`Clicked on ${item.title}`);
}
</script>

<style scoped>
.icon-space{
    display: flex;
     justify-content: space-between; align-items: center; width: 100%;
}
.boost-icon {
    position: relative;
    top: -35px;
    /* Ajusta este valor para sobresalir más o menos */
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
    /* Sombra opcional */
    border-radius: 50%;
    /* Para asegurarnos de que sea redondo */
}

.v-container {
    background-color: black;
}

.Tinder {
    padding: 39px;
}

.v-container {
    margin: 0;
    padding: 0;
    margin-bottom: 20px;
}

.v-card {
    border-radius: 8px;
}

a {
    color: #9b59b6;
}

.black-background {
    background-color: #1e1e1e;
    /* Fondo negro */
    color: white;
    /* Texto en blanco */
}
</style>