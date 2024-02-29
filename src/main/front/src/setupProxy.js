const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://localhost:8080',
            changeOrigin: true,
        })
    );

    app.use(
        '/v1',
        createProxyMiddleware({
            target: 'https://openapi.naver.com',
            changeOrigin: true,
        })
    );

    app.use(
        '/v2',
        createProxyMiddleware({
            target: 'https://newsapi.org',
            changeOrigin: true,
        })
    );

    app.use(
        '/map-reversegeocode',
        createProxyMiddleware({
            target: 'https://naveropenapi.apigw.ntruss.com',
            changeOrigin: true,
        })
    );

    app.use(
        '/openapi',
        createProxyMiddleware({
            target: 'https://bigdata.kepco.co.kr',
            changeOrigin: true,
        })
    );
};