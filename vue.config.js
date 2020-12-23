module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:8975',
                pathRewrite: {
                    '^/api': 'api',
                },
            },
        },
    },
}
