const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    // '/api'로 시작하는 요청은 'http://localhost:8080'으로 프록시됩니다.
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://localhost:8080',
            changeOrigin: true,
        })
    );

    // '/v1'로 시작하는 요청은 'https://openapi.naver.com'으로 프록시됩니다.
    app.use(
        '/v1',
        createProxyMiddleware({
            target: 'https://openapi.naver.com',
            changeOrigin: true,
        })
    );

    // '/v2'로 시작하는 요청은 'https://newsapi.org/v2'로 프록시됩니다.
    app.use(
        '/v2',
        createProxyMiddleware({
            target: 'https://newsapi.org',
            changeOrigin: true,
        })
    );
};