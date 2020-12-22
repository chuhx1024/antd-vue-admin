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
                path: '/dashboard',
                name: 'Dashboard',
                component: () => import('@/views/dashboard'),
                meta: {
                    title: '仪表盘',
                },
            },
        ],
    },
    {
        path: '/charts',
        component: BasicLayout,
        meta: {
            title: 'Echarts',
        },
        children: [
            {
                path: '/charts/line',
                name: 'Line',
                component: () => import('@/views/echarts/LineDemo.vue'),
                meta: {
                    title: '折线图',
                },
            },
            {
                path: '/charts/pie',
                name: 'Pie',
                component: () => import('@/views/echarts/PieDemo.vue'),
                meta: {
                    title: '饼状图',
                },
            },
            {
                path: '/charts/bar',
                name: 'Bar',
                redirect: '/charts/bar/tab1',
                component: () => import('@/views/echarts/bar-group'),
                meta: {
                    title: '柱状图',
                },
                children: [
                    {
                        path: '/charts/bar/tab1',
                        name: 'Tab1',
                        component: () => import('@/views/echarts/bar-group/BarFirst'),
                        meta: {
                            title: '柱状图1',
                        },
                    },
                    {
                        path: '/charts/bar/tab2',
                        name: 'Tab2',
                        component: () => import('@/views/echarts/bar-group/BarSecond'),
                        meta: {
                            title: '柱状图2',
                        },
                    },
                ],
            },
        ],
    },
    // {
    //     path: '*',
    //     component: BasicLayout,
    //     redirect: '404',
    //     hidden: true,
    //     children: [
    //         {
    //             path: '404',
    //             component: () => import('@/views/error-page/404'),
    //             name: 'Dashboard',
    //         },
    //     ],
    // },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: constantRoutes,
})

export default router
