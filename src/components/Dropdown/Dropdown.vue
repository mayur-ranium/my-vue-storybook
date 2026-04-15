<template>
    <div class="relative inline-block">
    <div @click="toggle" class="cursor-pointer">
      <slot name="trigger"></slot>
    </div>
    <div v-if="isOpen" class="absolute right-0 mt-2 w-40 bg-white border rounded shadow">
     <slot></slot>
    </div>
    </div>
</template>


<script>
export default {
    name: 'Dropdown',
    data() {
        return {
            isOpen: false,
        }
    },
    methods: {
        toggle() {
            console.log('clicked', this.isOpen)
            this.isOpen = !this.isOpen
        }
    }
}
</script>