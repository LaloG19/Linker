<template>
    <v-container fluid>
        <!-- Sección de Tinder Plus -->
        <v-card class="pa-4" color="#212121" flat>
            <v-row align="center" justify="center">
                <div class="icon-space mb-2 mt-2">
                    <v-icon color="red" size="30">mdi-fire</v-icon>
                    <v-icon color="teal" size="30">mdi-shield</v-icon>
                </div>
            </v-row>
        </v-card>
        <v-card>
            <v-row dense>
                <v-card>
                    <v-img src="../src/assets/Img/Marriot.png" class="align-end"
                        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="610px" width="400px" cover>
                        <div class="content-overlay">
                            <v-card-title class="text-white">Paulo, 29</v-card-title>
                            <v-card-text class="profile-info">
                                <p class="text-white">
                                    <v-icon left color="white" class="mr-2">mdi-map-marker</v-icon>
                                    Lives in Cancun
                                </p>
                                <p class="text-white">
                                    <v-icon left color="white" class="mr-2">mdi-briefcase</v-icon>
                                    3-4 years Experience
                                </p>
                                <p class="text-white">
                                    <v-icon left color="white" class="mr-2">mdi-code-tags</v-icon>
                                    Backend developer
                                </p>
                                <p class="text-white">
                                    <v-icon left color="white" class="mr-2">mdi-check-circle</v-icon>
                                    Proactive
                                </p>
                                <p class="text-white">
                                    <v-icon left color="white" class="mr-2">mdi-account</v-icon>
                                    > 20 years old
                                </p>
                            </v-card-text>

                            <v-card-actions class="action-buttons icon-space">
                                <v-btn icon color="red" class="ml-6">
                                    <v-icon size="30" >mdi-close</v-icon>
                                </v-btn>
                                <v-btn icon color="green" class="mr-6">
                                    <v-icon size="30" >mdi-heart</v-icon>
                                </v-btn>
                            </v-card-actions>
                        </div>
                    </v-img>
                </v-card>
            </v-row>
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
.content-overlay {
    position: absolute;
    bottom: 35px; /* Ajusta este valor para mover el contenido más arriba o abajo */
    left: 0;
    right: 0;
    padding: 10px;
}

.icon-space {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
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
}

.v-card {
    border-radius: 8px;
}



.black-background {
    background-color: #1e1e1e;
    /* Fondo negro */
    color: white;
    /* Texto en blanco */
}
</style>