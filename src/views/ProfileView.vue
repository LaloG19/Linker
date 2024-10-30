<script setup>
import { ref } from 'vue';
import Tabs from '@/components/Tabs/Tabs.vue';

// Controla la pestaña activa
const activeTab = ref(0);

// Definición de las pestañas con íconos y rutas
const tabs = [
    { icon: 'mdi-fire', route: '/fire' },
    { icon: 'mdi-star', route: '/busqueda' },
    { icon: 'mdi-view-grid', route: '/grid' },
    { icon: 'mdi-chat', route: '/chat' },
    { icon: 'mdi-account', route: '/account' },
];
</script>


<template>
        <v-container fluid class="background-container">
            <!-- Parte negra con borde curvado -->
            <div class="black-section" style="padding: 10vh 0;">
                <!-- Imagen de perfil en círculo -->
                <v-row justify="center" align="center" class="avatar-row">
                    <v-avatar size="35vw"> <!-- Tamaño fijo del avatar -->
                        <v-img src="../src/assets/Img/Halo.png" alt="Profile" />
                    </v-avatar>
                </v-row>
                <v-row justify="center">
                    <h2 class="profile-name">Rachel, 33</h2>
                </v-row>
                <v-row justify="space-around" class="actions-container" no-gutters style="margin-top: 5vh;">
                    <v-col cols="auto" class="text-center">
                        <v-btn icon color="purple" :width="'15vw'" :height="'15vw'">
                            <v-icon :size="'7vw'">mdi-cog</v-icon>
                        </v-btn>
                        <p>Settings</p>
                    </v-col>
                    <v-col cols="auto" class="text-center">
                        <v-btn icon color="purple" :width="'20vw'" :height="'20vw'" style="margin-top: 40%;">
                            <v-icon :size="'10vw'">mdi-pencil</v-icon>
                        </v-btn>
                        <p>Edit Profile</p>
                    </v-col>
                    <v-col cols="auto" class="text-center">
                        <v-btn icon color="purple" :width="'15vw'" :height="'15vw'">
                            <v-icon :size="'7vw'">mdi-shield</v-icon>
                        </v-btn>
                        <p>Logout</p>
                    </v-col>
                </v-row>

            </div>
            <!-- Parte gris debajo de la curva -->
            <div class="grey-section">
                <div class="content-wrapper">
                    <p class="main-text">Level up every action you take on</p>
                    <div class="pagination-dots">
                        <span class="dot"></span>
                        <span class="dot"></span>
                        <span class="dot active"></span>
                        <span class="dot"></span>
                        <span class="dot"></span>
                    </div>
                    <v-btn class="learn-more-btn" size="x-large" :style="{ width: '80vw', height: '6vh' }">
                        Learn More
                    </v-btn>
                </div>
            </div>
            <Tabs />

        </v-container>
</template>



<style scoped>
.bottones {
    border: none !important;
    /* Elimina cualquier borde */
    box-shadow: none !important;
    /* Elimina cualquier sombra */
}

.profile-name {
    color: #c59fff;
    margin-top: 2vh;
    text-align: center;
    font-size: 5vw;
    /* Tamaño base para pantallas pequeñas */
}

.actions-container p {
    margin-top: 0.5vh;
    font-size: 1.25rem;
    color: #c59fff;
}

/* Añadir un ajuste para la fila del avatar */
.avatar-row {
    margin-bottom: 2vh;
}

/* Rest of your styles remain unchanged */


.black-section {
    background-color: #111418;
    height: 60%;
    width: 100%;
    border-bottom-left-radius: 50% 20%;
    border-bottom-right-radius: 50% 20%;
    background-clip: padding-box;
    /* Asegura que el degradado respete las curvas */
    overflow: hidden;
    /* Evita que el degradado se salga de los bordes curvados */
    box-shadow: 0 10px 20px rgba(99, 0, 92, 0.5);
    /* Efecto de sombra */
    margin-bottom: 3px;
}

.grey-section {
    background-color: #191D22;
    height: 30%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2vh 0;
    /* Añadir un padding para espaciado */
}

.content-wrapper {
    text-align: center;
    color: white;
    padding: 0 5vw;
    /* Añadir padding lateral para responsividad */
}

.content-wrapper {
    text-align: center;
    color: white;
    padding: 0 5vw;
    /* Añadir padding lateral para responsividad */
}

.pagination-dots {
    margin: 14px 0;
}

.dot {
    height: 30px;
    width: 30px;
    margin: 0 6px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
    transition: background-color 0.3s ease;
}

.active {
    background-color: white;
}

.learn-more-btn {
    background-color: #7f52ba;
    color: white;
    border-radius: 30px;
    text-transform: uppercase;

}

@media screen and (min-width: 1080px) {
    .profile-name {
        font-size: 4.75rem;
        /* Tamaño específico para pantallas grandes */
    }
}

/* Media Query para pantallas más grandes (como 1080x2400) */
@media screen and (min-width: 1080px) and (min-height: 2400px) {
    .main-text {
        font-size: 2rem;
        /* Tamaño fijo para pantallas medianas */
    }

    .learn-more-btn {
        font-size: 1.25rem;
        /* Ajusta también el tamaño del botón */
        padding: 20px 40px;
    }
}

@media screen and (max-width: 1080px) and (min-height: 2400px) {
    .profile-name {
        font-size: 4.755rem;
    }

    .actions-container p {
        font-size: 2rem;
    }

    .learn-more-btn {
        font-size: 1.25rem;
        /* Ajustar el tamaño del botón */
        padding: 15px 30px;
        /* Ajustar el padding del botón */
    }

    .dot {
        height: 10px;
        width: 10px;
        margin: 0 6px;
        background-color: #bbb;
        border-radius: 50%;
        display: inline-block;
        transition: background-color 0.3s ease;
    }


    .v-btn:focus,
    .v-btn:active {
        outline: none;
        /* Elimina el contorno al hacer clic */
        box-shadow: none;
        /* Elimina el efecto de sombra */
    }
}
</style>


