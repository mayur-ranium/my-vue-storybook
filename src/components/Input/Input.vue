<template>
    <div class="form-input">
       <label v-if="label">{{ label }}: </label>
       <input :placeholder="placeholder" :disabled="disabled">
       <p v-if="error" class="text-red-600">{{ error }}</p>
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
    border: 1px solid #180505;
    border-radius: 8px;
    font-size: 14px;
    transition: all 0.3s ease;
}



</style>