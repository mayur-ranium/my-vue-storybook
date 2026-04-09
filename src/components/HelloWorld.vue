<script setup>
import MyButton from './MyButton.vue';
import Card from './Card.vue';
import { ref } from 'vue';
const count = ref(0);
</script>

<template>
  <div>
     <h1>Count: {{ count }}</h1>
     <MyButton label="Increase" @click="count++" />
     <MyButton label="Decrease" @click="count--" />
     <div class="card-container">
     <Card title="My Card" subText="This is a simple card component" mediaHref="favicon.svg" buttonText="Click me" />
     </div>
  </div>
</template>
