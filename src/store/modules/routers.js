import constantRoutes from '@/router//constantRoutes'
import syncRoutes from '@/router/syncRoutes'
import { getRoleMenuById } from '@/api/user'

const forFilter = (router) => {
    return router.filter(item => {
        if (item.children) {
            item.children = forFilter(item.children)
        }
        return item.hidden !== true
    })
}
// 递归过滤掉 hidden: true 的路由项
const getAllSidebar = () => {
    return forFilter([...constantRoutes, ...syncRoutes])
}

// 根据权限菜单 获取 可添加的同态路由

const forFilterPerssion = (router, menus) => {
    return router.filter(item => {
        if (item.children) {
            item.children = forFilterPerssion(item.children, menus)
            if (forFilterPerssion.length !== 0) {
                return true
            }
        }
        return menus.includes(item.path)
    })
}

const state = {
    allRoutes: [...constantRoutes, ...syncRoutes],
    allSideBar: getAllSidebar(),
    permissRoutes: [],
}

const mutations = {
    SET_ALLROUTES: (state, routes) => {
        state.allRoutes = routes
    },
    SET_PERMISSROUTES: (state, routes) => {
        state.permissRoutes = routes
    },
}

const actions = {
    async setPermisssRoutes ({ commit }, roleId) {
        const { data: { data: { menus } } } = await getRoleMenuById(roleId)
        const router = forFilterPerssion(syncRoutes, menus)
        commit('SET_PERMISSROUTES', router)
        return router
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,

}
