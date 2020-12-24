import Vue from 'vue'
import VueRouter from 'vue-router'
import { getToken } from '@/utils/handleCookie'
import constantRoutes from './constantRoutes'
import syncRoutes from './syncRoutes'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: constantRoutes,
})
let hasRoles = ''
router.beforeEach((to, from, next) => {
    const token = getToken()

    if (token) {
        if (to.path === '/login') {
            next('/')
        } else {
            if (hasRoles) {
                next()
            } else {
                hasRoles = 123
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
})
export default router
