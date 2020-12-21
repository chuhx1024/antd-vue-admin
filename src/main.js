import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import App from './App.vue'
import router from './router'
import store from './store'
import { Button, Layout, Icon } from 'ant-design-vue'
Vue.use(Button)
Vue.use(Layout)
Vue.use(Icon)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
