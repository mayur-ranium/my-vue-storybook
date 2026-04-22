<!-- LoginForm.vue -->
<template>
  <div class="space-y-3">
    <input v-model="email" placeholder="Email" class="border p-2 w-full" />
    <input v-model="password" type="password" placeholder="Password" class="border p-2 w-full" />

    <button @click="login" class="bg-blue-500 text-white px-4 py-2">
      Login
    </button>

    <p v-if="loading">Logging in...</p>
    <p v-if="error" class="text-red-500">Invalid credentials</p>
    <p v-if="success" class="text-green-500">Login successful</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const email = ref('');
const password = ref('');
const loading = ref(false);
const error = ref(false);
const success = ref(false);

const login = async () => {
  loading.value = true;
  error.value = false;
  success.value = false;

  try {
    const res = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),
    });

    if (!res.ok) throw new Error();

    success.value = true;
  } catch (e) {
    error.value = true;
  } finally {
    loading.value = false;
  }
};
</script>