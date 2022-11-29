<template>
    <div>
        <navBarVue />
        <div class="notNav">
            <section class="userSection">
                <User />        
            </section>
            <div class="musics">
                <AllMusics />
            </div>
            <Footer />
        </div>
    </div>
</template>

<script setup>
    import AllMusics from '@/components/allMusics/AllMusics.vue';
    import Footer from '@/components/Footer/Footer.vue';
    import navBarVue from '@/components/navBar/navBar.vue';
    import User from '@/components/User/User.vue';
</script>

<style scoped>

</style>