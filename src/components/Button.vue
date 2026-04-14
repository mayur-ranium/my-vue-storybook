<template>
  <button class="button" @click="$emit('click')">{{ label }}</button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    label: {
      type: String,
      required: true
    }
  },
  emits: ['click']
}
</script>

<style scoped>
.button {
  color: rgb(247, 30, 247);
  letter-spacing: 0.05em;
  padding: 0.5rem;
  cursor: pointer;
  transition: 0.3s all linear;
  font-weight: bold;
  border-radius: 12px;
  background: transparent;
  border: none;
  font-size: 1rem;
}

.button:hover {
  background-color: rgb(224, 173, 224);
}
</style>
