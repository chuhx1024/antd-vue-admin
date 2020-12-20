const state = {
    sidebar: {
        opened: true,
    },
}

const mutations = {
    TOOGLE_SIDEBAR: state => {
        state.sidebar.opend = !state.sidebar.opend
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
