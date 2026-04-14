<template>
  <div v-if="modelValue" class="overlay" @click.self="close">
    <div class="modal">
      <h2 v-if="title">{{ title }}</h2>

      <div class="content">
        <slot />
      </div>

      <div class="actions">
        <button @click="close" class="btn btn-secondary">Cancel</button>
        <button @click="$emit('confirm')" class="btn btn-primary">Confirm</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    modelValue: Boolean,
    title: String,
  },
  emits: ["update:modelValue", "confirm"],
  methods: {
    close() {
      this.$emit("update:modelValue", false);
    },
  },
};
</script>

<style scoped>
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);

  display: flex;
  align-items: center;
  justify-content: center;
}

/* Modal box */
.modal {
  background: #fff;
  border-radius: 10px;
  width: 400px;
  max-width: 90%;
  padding: 20px;

  box-shadow: 0 10px 25px rgba(0,0,0,0.2);
  animation: fadeIn 0.2s ease;
}

.modal h2 {
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 15px;
}

.content {
  margin: 15px 0;
  color: #4b5563;
  font-weight: 300;
  font-size: 12px;
}

.actions {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

/* Animation */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
.btn {
  padding: 10px 16px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s ease;
}

/* Variants */
.btn-primary {
  background-color: #4f46e5;
  color: white;
}

.btn-primary:hover {
  background-color: #4338ca;
}

.btn-secondary {
  background-color: #e5e7eb;
  color: #111827;
}

.btn-secondary:hover {
  background-color: #d1d5db;
}

/* States */
.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>