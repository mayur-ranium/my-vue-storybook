<template>
    <div class="mb-2">
      <label class="block font-medium mb-1">{{ label }}</label>
      <input :type="type" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" class="border rounded p-2 w-full">
      <p v-if="error" class="text-red-500 text-sm mt-1">{{ error }}</p>
    </div>
</template>


<script>
export default {
    props: {
        label: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            default: ''
        },
        modelValue: {
            type: String,
            default: ''
        },
        error: {
            type: String,
            default: ''
        }
    },
    emits: ['update:modelValue']
}
</script>