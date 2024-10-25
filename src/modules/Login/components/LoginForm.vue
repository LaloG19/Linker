<template>
    <div class="flex w-full justify-center items-center flex-col gap-4">
      <input v-model="email" placeholder="Email" class="border p-2" />
      <input v-model="password" type="password" placeholder="Password" class="border p-2" />
      <button @click="handleLogin" class="bg-blue-500 text-white px-4 py-2">Login</button>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue';
  import { useAuth } from '@/composables/useAuth';
  
  const email = ref('');
  const password = ref('');
  const { login } = useAuth();
  
  const handleLogin = async () => {
    await login(email.value, password.value);
  };
  </script>
  