<template>
  <component :is="layout">
    <router-view></router-view>
  </component>
</template>

<script>
// import { computed } from '@vue/reactivity';
// import { useRoute } from 'vue-router';
import AuthLayoutVue from './layout/AuthLayout.vue';
import MainLayoutVue from './layout/MainLayout.vue';
import SearchLayoutVue from './layout/SearchLayout.vue';
import GenreLayoutVue from './layout/GenreLayout.vue';

// const route = useRoute()

// const layout = computed(() => {
//   return route.meta.layout || 'auth' + '-layout'
// })

// console.log(layout);

export default{
  components: {
    AuthLayoutVue,
    MainLayoutVue,
    SearchLayoutVue,
    GenreLayoutVue
  },
  computed: {
    layout(){
      return (this.$route.meta.layout || 'auth') + 'LayoutVue'
    }
  }
}
</script>

<style>

</style>
