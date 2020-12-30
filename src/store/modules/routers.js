import constantRoutes from '@/router//constantRoutes'
import syncRoutes from '@/router/syncRoutes'

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
    // setAllRoutes: ({commit}, )
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,

}
