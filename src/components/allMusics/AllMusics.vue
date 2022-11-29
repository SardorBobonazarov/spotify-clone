<template>
    <div class="musicParent">
        <h1 class="text-white">All Music</h1>
        <div class="allMusics">
            <MusicCard />
        </div>
        <h1 class="text-white">Favorite Music</h1>
        <div class="allMusics">
            <MusicCard :filter="'favorite'" :filterTo="true" />
        </div>
    </div>
</template>


<script>
import MusicCard from '../MusicCard/musicCard.vue';

export default{
    components: { MusicCard },
    data() {
        return {
            
        }
    },
}
</script>

<style scoped>
    
</style>