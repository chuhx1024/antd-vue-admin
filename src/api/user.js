import request from '@/utils/request'

// login
export const login = (data) => {
    return request({
        url: '/user/login',
        method: 'post',
        data,
    })
}
