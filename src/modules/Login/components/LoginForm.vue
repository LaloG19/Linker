<template>
  <div class="flex w-full justify-center items-center flex-col gap-4">
    <input v-model="email" placeholder="Email" class="border p-2" />
    <input
      v-model="password"
      type="password"
      placeholder="Password"
      class="border p-2"
    />
    <p v-if="message" class="text-red-500">{{ message }}</p>
    <button @click="handleLogin" class="bg-blue-500 text-white px-4 py-2">
      Login
    </button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useAuth } from "@/composables/useAuth";

const email = ref("");
const password = ref("");
const { login } = useAuth();
const respuesta = ref("");
const message = ref("");

const handleLogin = async () => {
  respuesta.value = await login(email.value, password.value);

  
  if (respuesta.value.user?.email) {
    alert("Sesión inciada");
  } else if (respuesta.value.code == "auth/email-already-in-use") {
    message.value = "El correo ya existe";
  } else if (respuesta.value.code == "auth/weak-password") {
    message.value = "La contraseña debe tener al menos 6 caracteres";
  }  

  clearForm();
};

const clearForm = () => {
  email.value = "";
  password.value = "";
};
</script>
