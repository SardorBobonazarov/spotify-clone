import { createRouter, createWebHistory } from "vue-router";
import HomeView from '../views/HomeView.vue' 
import SearchView from '../views/SearchView.vue'
import SingleCategory from '../components/SingleCategory/SingleCategory.vue'


const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView,
    meta: {
      layout: 'main'
    }
  },
  {
    path: '/search',
    name: 'SearchView',
    component: SearchView,
    meta: {
      layout: 'search'
    }
  },
  {
    path: '/genre/:id',
    name: 'SingleCategory',
    component: SingleCategory,
    meta: {
      layout: 'genre'
    }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
