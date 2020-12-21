const state = {
    sidebarCollapsed: false,
}

const mutations = {
    TOOGLE_SIDEBAR: state => {
        state.sidebarCollapsed = !state.sidebarCollapsed
    },
}

const actions = {
    toggleSidbar ({ commit }) {
        commit('TOOGLE_SIDEBAR')
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,

}
