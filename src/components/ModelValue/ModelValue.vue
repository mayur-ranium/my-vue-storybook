<template>
    <input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" class="rounded border px-2 py-2 ">
</template>


<script>
export default {
    props: {
        modelValue: {
            type: String,
            default: ''
        }
    },
    emits: ['update:modelValue']
}
</script>