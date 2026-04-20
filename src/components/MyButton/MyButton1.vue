<template>
    <div>
     <button :class="buttonClass" aria-label="Submit form" @click="handleClick">{{ label }}</button>
    </div>
</template>


<script>
export default {
 name: "MyButton1",
 props: {
    label: {
        type: String,
        default: 'Click me'
    },
    variant: {
       type: String,
       default: 'primary' // 'primary' 'secondary'
    },
    disabled: {
        type: Boolean,
        default: false
    },
    loading: {
        type: Boolean,
        default: false,
    }
 },
 computed: {
    buttonClass() {
        return [ 'px-4 py-2 rounded transition',
        this.variant === 'primary' && 'bg-blue-500 text-white hover:bg-blue-600',
        this.variant === 'secondary' && 'bg-gray-200 text-black hover:bg-gray-300',
        this.variant === 'danger' && 'bg-red-500 text-white hover:bg-red-600',
        this.disabled && 'opacity-50 cursor-not-allowed',
        this.loading && 'cursor-wait' ]
    }
 },
 methods: {
    handleClick() {
        if (!this.disabled || !this.loading) {
            this.$emit("clicked")
        }
    }
 }
}

</script>


<style scoped>
    .btn {
        padding: 10px 15px;
        background-color: bisque;
        color: #000;
        border: none;
        border-radius: 10px;
    }
</style>