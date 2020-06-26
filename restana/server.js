// 
// !! IMPORTANT: EXPRESS DOESN'T SUPPORT THE NATIVE HTTP2 MODULE YET !!
// Express http/2 PR: https://github.com/expressjs/express/pull/3730
// See ./server-spdy.js for http/2 / SPDY support for Express using node-spdy
// 

const restana = require('restana'),
    http2 = require('http2'),
    fs = require('fs'),
    app = restana({
        server: http2.createSecureServer({
            key: fs.readFileSync('./tls/localhost.key'),
            cert: fs.readFileSync('./tls/localhost.crt'),
            allowHTTP1: true
        })
    })

app.all('/', (req, res) => res.send({ status: "Success", silly_html: "https://localhost:8000/html" }))

app.all('/html', (req, res) => {
    res.send(fs.readFileSync('./index.html'), 200, { 'Content-Type': 'text/html' })
})

app.start(8000).then(() => console.log('Started Restana server on https://localhost:8000'))
