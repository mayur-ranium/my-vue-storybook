<template>
    <div class="login-wrapper">
      <div class="title">
      <h3>Login</h3>
      </div>
      <div class="login-input">
        <label for="email">Email</label>
        <input id="email" :value="email" type="email" @input="$emit('update-email', $event.target.value)" :disabled="loading" :class="{ 'input-error': error }">
      </div>
      <div class="login-input">
        <label for="password">Password</label>
        <input id="password" :value="password" type="password" @input="$emit('update-password', $event.target.value)" :disabled="loading" :class="{ 'input-error': error }">
      </div>
      <div>
        <button role="button" class="submit-button" @click="$emit('submit')" :disabled="loading">
            <text v-if="!loading">Login</text>
            <text v-else>Loading...</text>
        </button>
      </div>
        <p v-if="error" style="color:red;">{{ error }}</p>
        <p v-if="success" style="color:green;">Login Successful</p>
    </div>
</template>

<script>
export default {
    name: 'Login',
    props: {
        email: String,
        password: String,
        error: String,
        success: Boolean,
        loading: Boolean
    }
}

</script>


<style scoped>
.login-wrapper {
  background: #fff;
  padding: 30px 25px;
  border-radius: 12px;
  width: 320px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

.title {
  text-align: center;
  margin-bottom: 20px;
}

.title h3 {
  margin: 0;
  font-size: 22px;
  color: #333;
}

.login-input {
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
}

.login-input label {
  font-size: 14px;
  margin-bottom: 5px;
  color: #555;
}

.login-input input {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 14px;
  transition: all 0.3s ease;
}

.login-input input:focus {
  border-color: #667eea;
  outline: none;
  box-shadow: 0 0 0 2px rgba(102, 126, 234, 0.2);
}

.login-input input.input-error {
  border-color: #e53e3e;
  box-shadow: 0 0 0 2px rgba(229, 62, 62, 0.2);
}

.login-input input.input-error:focus {
  border-color: #e53e3e;
  box-shadow: 0 0 0 2px rgba(229, 62, 62, 0.2);
}

.submit-button {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 8px;
  background: #667eea;
  color: #fff;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.submit-button:hover {
  background: #5a67d8;
}

.submit-button:active {
  transform: scale(0.98);
}
</style>