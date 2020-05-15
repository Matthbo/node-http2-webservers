const hapi = require('@hapi/hapi'),
    http2 = require('http2'),
    fs = require('fs');

const listener = http2.createSecureServer({
    key: fs.readFileSync('./tls/localhost.key'),
    cert: fs.readFileSync('./tls/localhost.crt'),
    allowHTTP1: true
})

const server = new hapi.Server({
    listener,
    port: 8000,
    host: 'localhost',
    tls: true
})

server.route({
    method: 'GET',
    path: '/',
    handler: (request, h) => JSON.stringify({
        status: "Success",
        silly_html: `${request.url}html`
    })
})

server.route({
    method: 'GET',
    path: '/html',
    handler: (request, h) => h.response(fs.readFileSync('./index.html')).type('text/html')
})

server.start().then(() => {
    console.log("Started Hapi server on", server.info.uri)
}).catch(err => console.error(err))


