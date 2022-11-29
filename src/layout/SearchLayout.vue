<template>
    <div>
        <navBarVue />
        <div class="notNav pt-20">
            <section class="userSection">
                <UserVue />        
            </section>
            <CategoriesVue />
            <FooterVue />
        </div>
    </div>
</template>

<script>
import navBarVue from '@/components/navBar/navBar.vue';
import UserVue from '@/components/User/User.vue';
import FooterVue from '@/components/Footer/Footer.vue';
import CategoriesVue from '@/components/categories/Categories.vue';

export default {
    components: {
        navBarVue,
        UserVue,
        FooterVue,
        CategoriesVue,
    }
}
</script>

<style scoped>

</style>