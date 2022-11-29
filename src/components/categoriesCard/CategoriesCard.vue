<template>
    <div class="category cursor-pointer">
        <h3 class="text-white">{{title}}</h3>
        <img :src="`/images/categories/${imgSrc}`" alt="" loading="lazy">
    </div>
</template>

<script>

export default {
    props: ['title', 'imgSrc'],
    data() {
        return {
            randomColor: ''
        }
    },
    mounted() {
        document.querySelectorAll('.category').forEach(c => {
            c.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        })
    },
}
</script>

<style scoped>
    .category{
        width: 200px;
        max-width: 200px;
        min-height: 200px;
        height: 200px;
        position: relative;
        overflow: hidden;
        border-radius: 10px;
    }
    h3{
        font-weight: 900;
        font-size: 23px;
        margin: .5em;
    }
    img{
        position: absolute;
        width: 120px;
        transform: rotate(30deg);
        bottom: -20px;
        right: -30px;
    }
</style>