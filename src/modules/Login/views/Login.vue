<template>
  <div class="login-container">
    <article class="flex px-4 w-[700px]">
      <LoginForm />
    </article>
    <p v-if="error" class="text-red-500">lalala {{ error }} lalal</p>
  </div>
</template>

<script lang="ts" setup>
import { useAuth } from "@/composables/useAuth";
import LoginForm from "@/modules/Login/components/LoginForm.vue";

const { error } = useAuth();
</script>

<style scoped>
.login-container {
  @apply flex flex-col items-center;
}
</style>
