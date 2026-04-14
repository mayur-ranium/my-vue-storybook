<script setup>
import Login from "./Login.vue";
import Button from "../stories/Button.vue";
import MyNavbar from "./Navbar/MyNavbar.vue";

import { ref } from "vue";
const count = ref(0);
const showAlert = ref(false);

const email = ref("");
const password = ref("");
const loginError = ref("");
const loginSuccess = ref(false);

function isValidEmail(val) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
}

function handleSubmit() {
  loginError.value = "";
  loginSuccess.value = false;

  if (!email.value.trim()) {
    loginError.value = "Email is required.";
    return;
  }
  if (!isValidEmail(email.value)) {
    loginError.value = "Please enter a valid email address.";
    return;
  }
  if (!password.value.trim()) {
    loginError.value = "Password is required.";
    return;
  }

  loginSuccess.value = true;
}
</script>

<template>
  <div>
    <!-- Navbar -->
    <MyNavbar logo="MyWebsite" :links="navLinks" @navigate="handleNav" />


    <div class="flex justify-center flex-col items-center">
      <h1 class="my-2">Count: {{ count }}</h1>
      <div>
        <Button
          @click="count++"
          label="Increase"
          primary="primary"
          class="mr-2"
        />
        <Button @click="count--" label="Decrease" primary="primary" />
      </div>
    </div>
    <div class="card-container">
      <Login
        :email="email"
        :password="password"
        :error="loginError"
        :success="loginSuccess"
        @update-email="email = $event"
        @update-password="password = $event"
        @submit="handleSubmit"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      navLinks: [{ name: "Home" }, { name: "About" }, { name: "Contact" }],
    };
  },
  methods: {
    handleNav(item) {
      console.log(item);
    },
  },
};
</script>
