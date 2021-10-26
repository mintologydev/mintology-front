/** @format */

//引入中间件
// eslint-disable-next-line @typescript-eslint/no-var-requires
const proxy = require('http-proxy-middleware')
//定义具体的转发规则
module.exports = function (app) {
  app.use(
    proxy.createProxyMiddleware('/api', {
      target: 'https://elated-hermann-3ef089.netlify.app',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '', //重写路由
      },
    }),
  )
}
