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
