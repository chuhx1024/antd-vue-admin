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
router.beforeEach(async (to, from, next) => {
    Nprogress.start()
    const token = getToken()

    if (token) {
        if (to.path === '/login') {
            next('/')
        } else {
            const hasRoles = store.state.user.roleId
            if (hasRoles) {
                next()
            } else {
                // 一定要用异步 否则 hasRoles 获取不到数据
                const { roleId } = await store.dispatch('user/getUserInfo', token)

                if (roleId === 'admin') {
                    router.addRoutes(syncRoutes)
                    router.options.routes = [...constantRoutes, ...syncRoutes]
                    next({ ...to, replace: true })
                } else {
                    const filrterRouter = await store.dispatch('routers/setPermisssRoutes', roleId)
                    console.log(filrterRouter, 110)
                    router.addRoutes(filrterRouter)
                    router.options.routes = [...constantRoutes, ...filrterRouter]
                    next({ ...to, replace: true })
                }
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
