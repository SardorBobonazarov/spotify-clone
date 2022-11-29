<template>
    <div>
        <h1 class="text-white text-4xl capitalize font-black">{{ id.toLowerCase().replaceAll(' ', '') }}</h1>
        <div class="allMusics">
            <musicCard :filter="'genre'" :filterTo="id.toLowerCase().replaceAll(' ', '')"/>
        </div>
    </div>
</template>

<script>
import Loading from '../../ui-components/Loading.vue';
import musicCard from '../MusicCard/musicCard.vue';

export default {
    components: { Loading, musicCard },
    data() {
        return {
            id: this.$route.params.id
        }
    },
}
</script>

<style scoped>
    
</style>