const { createProxyMiddleware } = require('http-proxy-middleware');

const cors = require('cors');

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

module.exports = function (app) {
    app.use(
        createProxyMiddleware('/v2', {
            target: 'https://newsapi.org',
            changeOrigin: true,
        }),
    );
};

module.exports = function (app) {
  app.use(
      cors({
          exposedHeaders: ['WWW-Authenticate', 'Etag'],
      }),
  );
};