import request from '@/utils/request'

// login
export const login = (data) => {
    return request({
        url: '/login',
        method: 'post',
        data,
    })
}
