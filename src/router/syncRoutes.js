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
]

export default asyncRoutes
