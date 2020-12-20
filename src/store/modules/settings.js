import defaultSettings from '../../../config/defaultSettings'

const { fixedHeader } = defaultSettings

const state = {
    fixedHeader,
}

const mutations = {
    CHANGE_SETTING: (state, { key, value }) => {
        // eslint-disable-next-line no-prototype-builtins
        if (state.hasOwnProperty(key)) {
            state[key] = value
        }
    },
}

const action = {
    changSetting ({ commit }, date) {
        commit('CHANGE_SETTING', date)
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    action,
}
