<template>
    <h2 class="text-white mb-4 text-2xl font-black">Все остальное</h2>
    <div class="categories flex gap-6 flex-wrap mb-12">
        <div class="categories" v-for="category in categoriesData">
            <router-link :to="{name: 'SingleCategory', params: { id: category.title}}">
                <CategoriesCardVue :title="category.title" :imgSrc="category.imgSrc"/>
            </router-link>
        </div>
    </div>
</template>

<script setup>
    import CategoriesCardVue from '../categoriesCard/CategoriesCard.vue';
</script>

<script>
export default {
    data() {
        return {
            
        }
    },
    computed: {
        categoriesData(){
            return this.$store.state.searchCategory.filteredCategoriesData
        },
        categoriesSearch(){
            return this.$store.state.searchCategory.searchCategoryFrom
        }
    }
}
</script>

<style scoped>

</style>