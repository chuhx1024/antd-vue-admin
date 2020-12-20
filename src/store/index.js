import Vue from 'vue'
import Vuex from 'vuex'

const modulesContext = require.context('./modules', false, /\.js$/)
const modules = modulesContext.keys().reduce((modules, item) => {
    const key = item.replace(/\.\/(.*)\.js$/, '$1')
    const val = modulesContext(item)
    modules[key] = val
    return modules
}, {})

Vue.use(Vuex)

export default new Vuex.Store({
    modules,
})
