import Vue from 'vue'
import Vuex from 'vuex'

const store = new Vuex.Store({
  modules: {
    app,
    settings,
    user,
    baseData,
    upload
  },
  getters,
  plugins: [createPersistedState({
    reducer(state) {
      return {
        app: {
          countDown: state.app.countDown
        },
        // 