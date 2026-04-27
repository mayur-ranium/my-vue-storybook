<template>
    <div class="card">
       <div class="media" :style="mediaBg" v-if="mediaHref"></div>
            <h1 class="title">{{ title }}</h1>
            <small class="subtitle">{{ subText }}</small>
            <p class="supporting-text mb-2">{{ paragraph }}</p>
                <div v-if="buttonText">
                    <Button :label="buttonText" variant="primary" :loading="loading" :leftIcon="IconCheck" @click="handleClick" />
                </div>
        </div>
</template>

<script>
import Button from '../MyButton.vue'
import IconCheck from '../Icons/IconCheck.vue';
import IconRight from '../Icons/IconRight.vue';


 export default {
    name: 'Card',
    components: { Button, IconCheck, IconRight },
    data() {
        return {
            IconCheck,
            loading: false,
            IconRight
        }
    },
    props: {
        title: String,
        subText: String,
        mediaHref: String,
        paragraph: String,
        buttonText: String
    },
    computed: {
        mediaBg() {
            return {
                backgroundImage: `url(${this.mediaHref})`,
            }
        }
    },
    methods: {
        handleClick() {
            this.loading = true;
            this.$emit('button-click');
            setTimeout(() => {
                this.loading = false;
                this.$emit('success');
            }, 2000);
        }
    }
 }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
.card {
    background-color: var(--bg-color, #fff);
    border-radius: 0.2rem;
    padding: 0.8rem;
    box-shadow: rgba(150, 150, 150) 0px 0px 3px;
    width: 350px;
    text-align: left;
}
.media {
    height: 200px;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
}
.title {
    font-size: 1.25rem;
    letter-spacing: normal;
    margin: 0.5rem 0 0.25rem;
    color: var(--text-color, #000);
}

</style>