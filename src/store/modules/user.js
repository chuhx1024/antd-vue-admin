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
    getUserInfo ({ commit, state }) {
        return new Promise((resolve, reject) => {
            getInfo(state.token).then((res) => {
                const { username, createTime, roleId } = res.data.data.user
                commit('SET_USERNAME', username)
                commit('SET_CREATETIME', createTime)
                commit('SET_ROLEID', roleId)
                resolve(res.data.data.user)
            })
        })
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
