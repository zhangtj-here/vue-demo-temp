module.exports = {
    chainWebpack: () =>{
        return {
            devServer: {
                proxyTable: {
                    '/api': {
                        target: 'https://www.baidu.com',
                        ws: true,
                        secure: false,
                        ws: true,
                        changeOrigin: true
                    }
                }
            }
        }
    }
}