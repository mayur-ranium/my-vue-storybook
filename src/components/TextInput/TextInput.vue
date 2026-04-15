<template>
   <div class="textInput">
     <input :type="type" :placeholder="placeholder" :class="sizeClass" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)">
   </div>
</template>

<script>
export default {
    name: 'TextInput',
    props: {
        placeholder : {
            type: String,
            default: "Enter name"
        },
        type: {
            type: String,
            default: "text"
        },
        size: {
            type: String,
            default: "large"
        },
        modelValue: {
            type: String,
            default: ''
        }

    },
    data() {
        return {}
    },
    computed: {
        sizeClass() {
            return {
                small: this.size === 'small',
                medium: this.size === 'medium',
                large: this.size === 'large'
            }
        }
    }
}
</script>

<style scoped>
 .textInput input {
    border: 1px solid #340505;
    outline: none;
    border-radius: 10px;
 }

 /* size variants */
.small {
  padding: 4px;
  font-size: 12px;
}

.medium {
  padding: 6px;
  font-size: 14px;
}

.large {
  padding: 8px;
  font-size: 16px;
}

</style>