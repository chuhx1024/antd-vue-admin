import request from '@/utils/request'

// login
export const login = (data) => {
    return request({
        url: '/user/login',
        method: 'post',
        data,
    })
}

// 根据 token 获取 用户信息
export const getInfo = (token) => {
    return request({
        url: '/user/info',
        method: 'get',
        params: { token },
    })
}

// 添加角色
export const addRole = (data) => {
    return request({
        url: 'user/role/add',
        method: 'post',
        data,
    })
}
// 获取角色列表
export const roleList = () => {
    return request({
        url: 'user/role/list',
        method: 'get',
    })
}

// 跟新角色(设置权限)

export const roleUpdate = (data) => {
    return request({
        url: 'user/role/update',
        method: 'post',
        data,
    })
}
