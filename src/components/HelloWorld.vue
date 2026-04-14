<script setup>
import Card from './Card.vue';
import Login from './Login.vue';
import Alert from './Alert.vue';
import Button from '../stories/Button.vue'

import { ref } from 'vue';
const count = ref(0);
const showAlert = ref(false);

const email = ref('');
const password = ref('');
const loginError = ref('');
const loginSuccess = ref(false);

function isValidEmail(val) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
}

function handleSubmit() {
  loginError.value = '';
  loginSuccess.value = false;

  if (!email.value.trim()) {
    loginError.value = 'Email is required.';
    return;
  }
  if (!isValidEmail(email.value)) {
    loginError.value = 'Please enter a valid email address.';
    return;
  }
  if (!password.value.trim()) {
    loginError.value = 'Password is required.';
    return;
  }

  loginSuccess.value = true;
}
</script>

<template>
  <div>
     <div>
     <h1 class="my-2">Count: {{ count }}</h1>
     <Button @click="count++" label="Increase" primary="primary" />
     <Button @click="count--" label="Decrease" primary="primary"/>
     </div>
     <div class="card-container">
     <Alert v-if="showAlert" type="info" message="Card button was clicked!" :closable="true" @close="showAlert = false" />
     <Card title="My Card" subText="This is a simple card component" mediaHref="favicon.svg" buttonText="Click me" @button-click="showAlert = true" @success="showAlert = false" />
     <Login
       :email="email"
       :password="password"
       :error="loginError"
       :success="loginSuccess"
       @update-email="email = $event"
       @update-password="password = $event"
       @submit="handleSubmit"
     />
     <button class="bg-blue-500 text-white px-4 py-2 rounded">
        Tailwind Working 🚀
      </button>
     </div>
  </div>
</template>
