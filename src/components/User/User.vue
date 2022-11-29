<template>
    <div class="userBlock text-white flex justify-between items-center px-12 h-20">
        <div class="nextPrev flex">
            <div class="icon-links">
                <i class="fas fa-chevron-left text-3xl bg-black rounded-full py-2 px-4 mr-4"></i>
                <i class="fas fa-chevron-right text-3xl bg-black rounded-full py-2 px-4"></i>
            </div>
            <SearchBtnVue v-if="$route.meta.layout === 'search'" class="mt-1"/>
        </div>
        <div class="userRec">
            <router-link to="/" class="mr-8">Зарегистрироваться</router-link>
            <Button>
                <span>Войти</span>
            </Button>
        </div>
    </div>
</template>

<script setup>
import Button from '@/ui-components/Button.vue';
import SearchBtnVue from '../SearchBtn/SearchBtn.vue';

</script>

<style scoped>
    .userBlock{
        background-color: rgba(0, 0, 0, .9);
    }
    button{
        max-width: 100px;
        padding: 1em 0;
        text-align: center;
        background-color: #fff;
        color: #000;
        margin: 0;
    }
    nuxt-link{
        margin-right: 1em;
        opacity: .7;
        font-weight: bold;
    }
    nuxt-link:hover{
        opacity: 1;
    }
</style>