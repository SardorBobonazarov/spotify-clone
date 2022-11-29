<template>
    <div class="musicCard p-4 my-8" v-for="api in apiData">
        <div class="musicPart">
            <img :src="`/images/singers/${api.img}`" alt="music">
            <i class="fas fa-play"></i>
        </div>
        <div class="cardInfo">
            <h4 class="name m-2 text-2xl font-black">{{api.name}}</h4>
            <p class="definition text-opacity-60">{{api.description}}</p>
        </div>
    </div>
</template>

<script>
// import { mapMutations } from 'vuex';
    export default {
        props: ['filter', 'filterTo', 'genre'],
        data() {
            return {
                
            }
        },
        computed: {
            apiData(){
                if(this.filter && this.filterTo){
                    return this.$store.state.musicApi.filteredArray
                }else{
                    return this.$store.state.musicApi.api
                }
            }
        },
        mounted(){
            if(this.filter && this.filterTo){
                this.$store.commit('filterImage', [this.filter, this.filterTo])
            }
        },
        // methods: {
        //     ...mapMutations({
        //         update: ['filterImage', 'go to payload']
        //     })
        // }
    }
</script>

<style scoped>
    .musicCard{
        background-color: #181818;
        color: #fff;
        text-align: center;
        border-radius: 5px;
        transition: .5s ease;
        cursor: pointer;
        min-width: 200px;
    }
    .musicCard:hover{
        background-color: #282828;
    }
    .musicCard img{
        width: 100%;
        height: 100%;
        margin: 10px auto;
    }
    .musicPart{
        position: relative;
    }
    .musicPart i.fa-play{
        position: absolute;
        opacity: 0;
        right: 2px;
        bottom: 5px;
        background-color: #1fdf64;
        border-radius: 50%;
        padding: 1.2em;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: .5s ease;
    }
    .musicPart i.fa-play:hover{
        transform: scale(1.1);
    }
    .musicCard:hover .musicPart i.fa-play{
        opacity: 1;
        bottom: 15px;
    }
</style>