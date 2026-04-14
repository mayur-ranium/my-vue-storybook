<script setup>
import Card from './Card.vue';
import Login from './Login.vue';
import Alert from './Alert.vue';
import Button from '../stories/Button.vue'

import { ref } from 'vue';
const count = ref(0);
const showAlert = ref(false);
</script>

<template>
  <div>
     <div class="flex mb-2">
     <h1>Count: {{ count }}</h1>
     <Button @click="count++" label="Increase" primary="primary" />
     <Button @click="count--" label="Decrease" primary="primary"/>
     </div>
     <div class="card-container">
     <Alert v-if="showAlert" type="info" message="Card button was clicked!" :closable="true" @close="showAlert = false" />
     <Card title="My Card" subText="This is a simple card component" mediaHref="favicon.svg" buttonText="Click me" @button-click="showAlert = true" />
     <Login email="" password="" :error="error"/>
     <button class="bg-blue-500 text-white px-4 py-2 rounded">
        Tailwind Working 🚀
      </button>
     </div>
  </div>
</template>
