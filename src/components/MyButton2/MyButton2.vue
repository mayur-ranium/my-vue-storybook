<template>
  <button :class="bgClass" @click="$emit('clicked')">
   {{ label }}
  </button>
</template>

<script>
export default {
  name: 'MyButton2',
  props: {
    label: {
      type: String,
      default: '',
    },
    variant: {
      type: String,
      default: 'primary'
    }
  },
  computed: {
    bgClass() {
      return ['cursor-pointer rounded p-2',
        this.variant === 'primary' ? 'bg-red-200 text-red-500 hover:bg-red-700 hover:text-white' : '',
        this.variant === 'secondary' ? 'bg-gray-200 text-gray-500 hover:bg-gray-700 hover:text-white' : ''
      ]
    }
  }
}

</script>