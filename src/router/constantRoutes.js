import BasicLayout from '@/layout/BasicLayout'
const constantRoutes = [
    {
        path: '/login',
        hidden: true,
        name: 'Login',
        component: () => import('@/views/login'),
    },
    {
        path: '/',
        component: BasicLayout,
        redirect: '/dashboard',
        meta: {
            title: '仪表盘',
            icon: '#icon-dashboard',
        },
        children: [
            {
                path: '/dashboard',
                name: 'Dashboard',
                component: () => import('@/views/dashboard'),
                meta: {
                    title: '仪表盘',
                    icon: '#icon-dashboard',
                },
            },
        ],
    },
    {
        path: '/protobuf',
        component: BasicLayout,
        redirect: '/protobuf',
        meta: {
            title: 'WS-Protobuf',
            icon: '#icon-dashboard',
        },
        children: [
            {
                path: '/protobuf',
                name: 'Protobuf',
                component: () => import('@/views/protobuf'),
                meta: {
                    title: 'WS-Protobuf',
                    icon: '#icon-dashboard',
                },
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

export default constantRoutes
