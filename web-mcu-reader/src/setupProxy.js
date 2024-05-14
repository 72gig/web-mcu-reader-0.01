const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use('/api', createProxyMiddleware({
    target: 'http://localhost:5190/api', // ASP.NET Core 應用程式的地址
    changeOrigin: true,
    pathRewrite: {
      '^/api': '', // 如果 ASP.NET Core 應用程式的端點不是 '/api'，這裡需要做相應的修改
    },
  }));
};
