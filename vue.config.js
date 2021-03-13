const path = require('path')
module.exports = {
    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'less',
            patterns: [
                path.resolve(__dirname, './src/styles/variables.less'),
            ],
        },
    },
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
