<template>
    <div :class="wrapperClass">
     <div :class="spinnerClass">
     </div>
     <p v-if="label" class="text-sm text-gray-400">{{ label }}</p>
    </div>
</template>


<script setup>
import { computed } from 'vue';
    const props = defineProps({
        size: {
            type: String,
            default: 'md'
        },
        label: {
            type: String,
            default: ''
        },
        fullScreen : {
            type: Boolean,
            default: false
        }
    });


const sizeClasses = {
  sm: 'w-4 h-4 border-2',
  md: 'w-8 h-8 border-4',
  lg: 'w-12 h-12 border-4',
};

const spinnerClass = computed(() => {
  return `
    animate-spin rounded-full border-blue-500 border-t-transparent
    ${sizeClasses[props.size]}
  `;
});

const wrapperClass = computed(() => {
  return props.fullScreen
    ? 'fixed inset-0 flex flex-col items-center justify-center bg-black/30'
    : 'flex flex-col items-center justify-center';
});

</script>