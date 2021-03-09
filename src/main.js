import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import App from './App.vue'
import router from './router'
import store from './store'
import '@/styles/index.less'
import '@/assets/iconfont/iconfont'
import '@/assets/iconfont/icon.css'

import * as echarts from 'echarts'
// 数据词典
import dict from './components/Dict'

import {
    Button, Layout, Icon, Menu, Breadcrumb, Row, Col,
    FormModel, Input, Checkbox, message, Table, Divider,
    Modal, Select, Tree, Dropdown, Descriptions,
} from 'ant-design-vue'
Vue.use(Button)
Vue.use(Layout)
Vue.use(Icon)
Vue.use(Menu)
Vue.use(Breadcrumb)
Vue.use(Row)
Vue.use(Col)
Vue.use(FormModel)
Vue.use(Input)
Vue.use(Checkbox)
Vue.use(Table)
Vue.use(Divider)
Vue.use(Modal)
Vue.use(Select)
Vue.use(Tree)
Vue.use(Dropdown)
Vue.use(Descriptions)
Vue.prototype.$message = message

Vue.prototype.$echarts = echarts
Vue.config.productionTip = false

// 使用mock 数据
if (process.env.NODE_ENV === 'development') {
    const { mockXHR } = require('../mock')
    mockXHR()
}

// 使用字典插件
Vue.use(dict)

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
