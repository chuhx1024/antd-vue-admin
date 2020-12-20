import Vue from 'vue'
import Vuex from 'vuex'
import settings from './modules/settings'
import app from './modules/app'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        settings,
        app,
    },
})
