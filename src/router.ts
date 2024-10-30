import { createRouter, createWebHistory } from "vue-router";

import LayoutAuth from "@/Shared/components/LayoutAuth.vue";
import Login from "@/modules/Login/views/Login.vue";
import Register from "@/modules/Register/views/Register.vue";
import Home from "./modules/Home/views/Home.vue";
import ProfileView from "@/views/ProfileView.vue";
import BusquedaView from "@/views/BusquedaView.vue";
import SettingVIew from "@/views/SettingVIew.vue";
import ProfileCard from "@/views/ProfileCard.vue";


import Prueba from "@/views/Prueba.vue";
const routes = [
  {
    path: "/Home",
    name: "Home",
    component: Home,
  },
  {
    path: "/busqueda",
    name: "busqueda",
    component: BusquedaView,
  },
  {
    path: "/ajustes",
    name: "ajustes",
    component: SettingVIew,
  },
  {
    path: "/likes",
    name: "likes",
    component: ProfileCard,
  },
  {
    path: "/perfil",
    name: "perfil",
    component: ProfileView,
  },
  {
    path: "/",
    component: LayoutAuth,
    children: [
      { path: "login", component: Login },
      { path: "register", component: Register },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
