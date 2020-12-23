import Cookie from 'js-cookie'

const tokenKey = 'Admin-Token'

export const getToken = () => {
    return Cookie.get(tokenKey)
}

export const setToken = (token) => {
    return Cookie.set(tokenKey, token)
}

export const removeToken = (next) => {
    return Cookie.remove(tokenKey)
}
