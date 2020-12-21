import Vue from 'vue'
import VueRouter from 'vue-router'
import BasicLayout from '@/layout/BasicLayout'

Vue.use(VueRouter)

const constantRoutes = [
    {
        path: '/',
        component: BasicLayout,
        redirect: '/dashboard',
        children: [
            {
                path: 'dashboard',
                component: () => import('@/views/dashboard'),
                name: 'Dashboard',
            },
            {
                path: '404',
                component: () => import('@/views/error-page/404'),
                name: 'NotFound',
            },
        ],
    },
    { path: '*', redirect: '/404', hidden: true },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: constantRoutes,
})

export default router
