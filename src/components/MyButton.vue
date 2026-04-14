<template>
  <button
    :class="[
      'inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium transition',
      variantClasses,
      (disabled || loading) ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
    ]"
    :disabled="disabled || loading"
    @click="$emit('click')"
  >
    <!-- Loading Spinner -->
    <svg
      v-if="loading"
      class="w-4 h-4 animate-spin"
      viewBox="0 0 24 24"
      fill="none"
    >
      <circle
        class="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      />
      <path
        class="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v8H4z"
      />
    </svg>

   <!-- Left Icon -->
    <span v-if="leftIcon && !loading" class="flex items-center">
      <component :is="leftIcon" class="w-4 h-4" />
    </span>

    <!-- Label -->
    <span>{{ label }}</span>

     <!-- Right Icon -->
    <span v-if="rightIcon && !loading" class="flex items-center">
      <component :is="rightIcon" class="w-4 h-4" />
    </span>
  </button>
</template>

<script>
export default {
  name: 'MyButton',
  props: {
    label: {
      type: String,
      default: 'Button',
    },
    variant: {
      type: String,
      default: 'primary', // primary | secondary
    },
    disabled: Boolean,
    loading: Boolean,
    icon: [Object, Function], // pass icon component
    leftIcon: [Object, Function],
    rightIcon: [Object, Function],
  },
  computed: {
    variantClasses() {
      return this.variant === 'primary'
        ? 'bg-blue-600 text-white hover:bg-blue-700'
        : 'bg-gray-200 text-black hover:bg-gray-300';
    },
  },
};
</script>