<template>
    <div>
        <navBarVue />
        <div class="notNav pt-20">
            <section class="userSection">
                <UserVue />        
            </section>
            <SingleCategory />
            <FooterVue />
        </div>
    </div>
</template>

<script>
import navBarVue from '@/components/navBar/navBar.vue';
import UserVue from '@/components/User/User.vue';
import FooterVue from '@/components/Footer/Footer.vue';
import SingleCategory from '@/components/SingleCategory/SingleCategory.vue';

export default {
    components: {
    navBarVue,
    UserVue,
    FooterVue,
    SingleCategory
}    
}
</script>

<style scoped>
    
</style>