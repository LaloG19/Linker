<template>
    <v-container  fluid>

        <!-- Barra de búsqueda -->
        <v-text-field outlined hide-details rounded dense placeholder="Buscar..." prepend-inner-icon="mdi-magnify"
            class="mb-4" variant="underlined"></v-text-field>

        <!-- Título de sección -->
        <h2 class="text-h6 font-weight-bold">Welcome to Explore</h2>

        <!-- Grilla de tarjetas -->
        <v-row dense>
            <v-col v-for="(item, index) in exploreItems" :key="index" cols="6" class="pb-4 " >
                <v-card :class="item.color" height="200" class="d-flex align-center justify-center text-white imga "
                    @click="onCardClick(item)">
                    <v-img :src="item.image" cover gradient="to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)" height="100%"
                        width="100%">
                        <v-container class="fill-height d-flex align-center justify-center">
                            <span class="text-h5 font-weight-bold">{{ item.title }}</span>
                        </v-container>
                    </v-img>
                </v-card>
            </v-col>
        </v-row>
        <Tabs/>
    </v-container>
    
</template>

<script setup>
import { ref } from 'vue';
import Tabs from '../components/Tabs/Tabs.vue';


const exploreItems = ref([
    { title: 'Looking for love', image: '../src/assets/Img/Image.png', color: 'pink darken-2' },
    { title: 'Free tonight', image: '../src/assets/Img/Image1.png', color: 'red darken-2' },
    { title: 'Let’s be friends', image: '../src/assets/Img/Image2.png', color: 'green darken-2' },
    { title: 'Coffee date', image: '../src/assets/Img/Image3.png', color: 'brown lighten-2' },
    { title: 'Coffee date', image: '../src/assets/Img/Image4.png', color: 'brown lighten-2' },
    { title: 'Coffee date', image: '../src/assets/Img/Image4.png', color: 'brown lighten-2' },
    { title: 'Coffee date', image: '../src/assets/Img/Image4.png', color: 'brown lighten-2' },
    { title: 'Coffee date', image: '../src/assets/Img/Image4.png', color: 'brown lighten-2' },
]);

const icons = ref(['mdi-fire', 'mdi-star', 'mdi-view-grid', 'mdi-message', 'mdi-account']);

function onCardClick(item) {
    console.log(`Clicked on ${item.title}`);
}
</script>

<style scoped>
.v-text-field {
    color: #BC8FFF
}


</style>