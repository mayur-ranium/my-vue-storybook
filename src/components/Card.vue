<template>
    <div class="card">
       <div class="media" :style="mediaBg" v-if="mediaHref"></div>
       <h1 class="title">{{ title }}</h1>
       <small class="subtitle">{{ subText }}</small>
       <p class="supporting-text">{{ paragraph }}</p>
       <div v-if="buttonText" >
        <a class="button-class">{{ buttonText }}</a>
       </div>
    </div>
</template>

<script>
 export default {
    name: 'Card',
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
    }
 }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
.card {
    background-color: #fff;
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
    color: #000;
}
.button-class {
    color: rgb(247, 30, 247);
    letter-spacing: 0.05em;
    padding: 0.5rem;
    cursor: pointer;
    transition: 0.3s all linear;
    font-weight: bold;
    border-radius: 12px;
}

.button-class:hover {
    background-color: rgb(224, 173, 224);
}

</style>