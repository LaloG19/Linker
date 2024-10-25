<template>
  <div class="register-container">
    <article class="flex px-4 w-[700px]">
      <RegisterForm />
    </article>
    <p v-if="error" class="text-red-500">{{ error }}</p>
  </div>
</template>

<script lang="ts" setup>
import { useAuth } from "@/composables/useAuth";
import RegisterForm from "@/modules/Register/components/RegisterForm.vue";

const { error } = useAuth();
</script>

<style scoped>
.register-container {
  @apply flex flex-col items-center;
}
</style>
