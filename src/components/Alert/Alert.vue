<template>
    <div :class="['alert', `alert-${type}`]">
     <span>{{ message }}</span>
     <button v-if="closable" @click="closeAlert">✖</button>
    </div>
</template>


<script>
export default {
    name: "Alert",
    props: {
        message: {
            type: String,
            default: "this is simple message"
        },
        type: {
            type: String,
            default: 'info'
        },
        closable: {
            type: Boolean,
            default: false
        }


    },
    methods: {
        closeAlert() {
            this.$emit("close")
        }
    }
}

</script>


<style scoped>
.alert {
  padding: 10px;
  border-radius: 5px;
  margin: 10px 0;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.alert-info {
  background: #3498db;
}

.alert-success {
  background: #2ecc71;
}

.alert-error {
  background: #e74c3c;
}

.alert-warning {
  background: #f39c12;
}

button {
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
}
</style>