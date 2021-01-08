import Vue from 'vue'
import Vuex from 'vuex'
import app from './'

const store = new Vuex.Store({
  modules: {
    app
  }
})

export default store