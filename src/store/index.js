import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import car from "./modules/car";

export default new Vuex.Store({
  state: {},

  mutations: {},

  actions: {},

  modules: {
    car,
  },
});
