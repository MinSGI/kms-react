const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:8080',	// 서버 URL or localhost:설정한포트번호
      changeOrigin: true,
    })
  );
};

module.exports = function (app) {
    app.use(
        createProxyMiddleware('/v1/search', {
            target: 'https://openapi.naver.com',
            changeOrigin: true,
        }),
    );
};