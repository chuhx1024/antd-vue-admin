import BasicLayout from '@/layout/BasicLayout'
const asyncRoutes = [
    {
        path: '/user',
        component: BasicLayout,
        redirect: '/user/customers',
        meta: {
            title: '用户权限',
            icon: '#icon-echarts',
        },
        children: [
            {
                path: '/user/customers',
                name: 'Customers',
                component: () => import('@/views/user/customers'),
                meta: {
                    title: '用户管理',
                    icon: '#icon-line',
                },
            },
            {
                path: '/user/roles',
                name: 'Roles',
                component: () => import('@/views/user/roles'),
                meta: {
                    title: '角色管理',
                    icon: '#icon-pie',
                },
            },
        ],
    },
    {
        path: '/charts',
        component: BasicLayout,
        redirect: '/charts/line',
        meta: {
            title: 'Echarts',
            icon: '#icon-echarts',
        },
        children: [
            {
                path: '/charts/line',
                name: 'Line',
                component: () => import('@/views/echarts/LineDemo.vue'),
                meta: {
                    title: '折线图',
                    icon: '#icon-line',
                },
            },
            {
                path: '/charts/pie',
                name: 'Pie',
                component: () => import('@/views/echarts/PieDemo.vue'),
                meta: {
                    title: '饼状图',
                    icon: '#icon-pie',
                },
            },
            {
                path: '/charts/bar',
                name: 'Bar',
                redirect: '/charts/bar/tab1',
                component: () => import('@/views/echarts/bar-group'),
                meta: {
                    title: '柱状图',
                    icon: '#icon-barchart',
                },
                children: [
                    {
                        path: '/charts/bar/tab1',
                        name: 'Tab1',
                        component: () => import('@/views/echarts/bar-group/BarFirst'),
                        meta: {
                            title: '柱状图1',
                            icon: '#icon-bar',
                        },
                    },
                    {
                        path: '/charts/bar/tab2',
                        name: 'Tab2',
                        component: () => import('@/views/echarts/bar-group/BarSecond'),
                        meta: {
                            title: '柱状图2',
                            icon: '#icon-echarts',
                        },
                    },
                ],
            },
        ],
    },
]

export default asyncRoutes
