<template>
    <div class="overlay" @click="$emit('closed')">
      <h1 class="modelTitle">{{ title }}</h1>
      <p class="content"><slot /></p>
      <button @click="handleOpenModel">Open</button>
    </div>
</template>


<script>
export default {
    props: {
        title: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            showModel: false
        }
    },
    methods: {
        handleOpenModel () {
            this.showModel = true
        }
    }
}

</script>