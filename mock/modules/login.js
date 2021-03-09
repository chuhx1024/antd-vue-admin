module.exports = [
    {
        url: '/user/login',
        type: 'post',
        response: config => {
            return {
                status: 0,
                data: {
                    token: 123,
                },
            }
        },
    },
    {
        url: '/user/info',
        type: 'get',
        response: config => {
            return {
                status: 0,
                data: {
                    user: {
                        createTime: 1610680565056,
                        password: 'e10adc3949ba59abbe56e057f20f883e',
                        roleId: 'admin',
                        username: 'admin',
                        __v: 0,
                        _id: '600108f5f43928db59852aec',
                    },
                },
            }
        },
    },
]
