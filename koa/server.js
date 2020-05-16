const koa = require('koa'),
    route = require('koa-route'),
    sendFile = require('koa-sendfile'),
    http2 = require('http2'),
    fs = require('fs'),
    app = new koa();

app.use(route.all('/', ctx => ctx.body = JSON.stringify({ status: "Success", silly_html: "https://localhost:8000/html" })))

app.use(route.all('/html', ctx => sendFile(ctx, './index.html')))

http2.createSecureServer({
    key: fs.readFileSync('./tls/localhost.key'),
    cert: fs.readFileSync('./tls/localhost.crt'),
    allowHTTP1: true
}, app.callback()).listen(8000, () => console.log('Started Koa server on https://localhost:8000'));
