<template>
  <div class="flex w-full justify-center items-center flex-col gap-4">
    <input v-model="email" placeholder="Email" class="border p-2" />
    <input v-model="password" type="password" placeholder="Password" class="border p-2" />
    <p v-if="message" class="text-red-500">{{ message }}</p>
    <button @click="handleRegister" class="bg-green-500 text-white px-4 py-2">Register</button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useAuth } from '@/composables/useAuth';

const email = ref('');
const password = ref('');
const { register } = useAuth();
const respuesta = ref('');
const message = ref('');

const handleRegister = async () => {
  respuesta.value = await register(email.value, password.value);
  
  if(respuesta.value.user?.email)
  {
    alert('Usuario registrado');
  }else if(respuesta.value.code == 'auth/email-already-in-use'){
    message.value = 'El correo ya existe';
  }else if (respuesta.value.code == 'auth/weak-password'){
    message.value = 'La contraseña debe tener al menos 6 caracteres';
  }

  clearForm();
};

const clearForm = () => {
  email.value = '';
  password.value = '';
};
</script>
