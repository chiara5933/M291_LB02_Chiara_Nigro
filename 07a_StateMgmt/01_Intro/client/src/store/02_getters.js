import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    vorname: "Andrea",
    nachname: "Russo",
    lehrbetrieb: "Migros Genossenschaftsbund",
    beruf: "Mediamatiker/in EFZ",
    jahr: "1. bis 4. Lehrjahr"
  },
  getters: {
    trainer(state) {
      return `${state.vorname} ${state.nachname}`;
    },
    trainerEmail(state) {
      return `${state.vorname}.${state.nachname}@mgb.com`.toLowerCase();
    },
    jobPosition(state) {
      return ` für ${state.beruf} im ${state.jahr}`;
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
