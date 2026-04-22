<template>
  <p v-if="loading">Loading...</p>
  <p v-else-if="error">Error occurred</p>
  <ul v-else>
    <li v-for="user in users" :key="user.id">{{ user.name }}</li>
  </ul>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const users = ref([]);
const loading = ref(true);
const error = ref(false);

onMounted(async () => {
  try {
    const res = await fetch('/api/users');
    if (!res.ok) throw new Error('Request failed');
    users.value = await res.json();
  } catch {
    error.value = true;
  } finally {
    loading.value = false;
  }
});
</script>