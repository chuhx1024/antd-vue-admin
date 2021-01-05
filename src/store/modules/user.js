import { getInfo } from '@/api/user'
import { getToken } from '@/utils/handleCookie'
const state = {
    token: getToken(),
    username: '',
    phone: '',
    email: '',
    createTime: '',
    roleId: '',
}

const mutations = {
    SET_TOKEN: (state, token) => {
        state.token = token
    },
    SET_USERNAME: (state, username) => {
        state.username = username
    },
    SET_PHONE: (state, phone) => {
        state.phone = phone
    },
    SET_EMAIL: (state, email) => {
        state.email = email
    },
    SET_CREATETIME: (state, createTime) => {
        state.createTime = createTime
    },
    SET_ROLEID: (state, id) => {
        state.roleId = id
    },
}

const actions = {
    async getUserInfo ({ commit, state }) {
        const { data } = await getInfo(state.token)
        const { username, createTime, roleId } = data.data.user
        commit('SET_USERNAME', username)
        commit('SET_CREATETIME', createTime)
        commit('SET_ROLEID', roleId)
    },
    setToken ({ commit }, token) {
        commit('SET_TOKEN', token)
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,

}
