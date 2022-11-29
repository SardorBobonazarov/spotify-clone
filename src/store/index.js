import { createStore } from "vuex";

import searchCategory from "@/modules/searchCategory";
import musicApi from "@/modules/musicApi";

const store = createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: { searchCategory, musicApi },
})

export default store