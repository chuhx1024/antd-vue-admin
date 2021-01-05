import Vue from 'vue'
import VueRouter from 'vue-router'
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import { getToken } from '@/utils/handleCookie'
import constantRoutes from './constantRoutes'
import syncRoutes from './syncRoutes'
import store from '@/store'

Vue.use(VueRouter)

Nprogress.configure({ showSpinner: false })

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: constantRoutes,
})
let hasRoles = ''
router.beforeEach(async (to, from, next) => {
    Nprogress.start()
    const token = getToken()

    if (token) {
        if (to.path === '/login') {
            next('/')
        } else {
            if (hasRoles) {
                next()
            } else {
                hasRoles = 123
                store.dispatch('user/getUserInfo', token)
                router.addRoutes(syncRoutes)
                router.options.routes = [...constantRoutes, ...syncRoutes]
                next({ ...to, replace: true })
            }
        }
    } else {
        if (to.path === '/login') {
            next()
        } else {
            next({ name: 'Login' })
        }
    }
    Nprogress.done()
})
export default router
