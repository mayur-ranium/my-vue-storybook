<template>
  <div class="form-input">
    <label v-if="label">{{ label }} : </label>
    <input
      :placeholder="placeholder" 
      :disabled="disabled"
    />
    <p v-if="error" style="color: red;">{{ error }}</p>
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    label: String,
    placeholder: String,
    error: String,
    disabled: Boolean
  }
}
</script>


<style scoped>
.form-input input {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 14px;
  transition: all 0.3s ease;
}

.form-input input:focus {
  border-color: #667eea;
  outline: none;
  box-shadow: 0 0 0 2px rgba(102, 126, 234, 0.2);
}


</style>