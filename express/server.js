// 
// !! IMPORTANT: EXPRESS DOESN'T SUPPORT THE NATIVE HTTP2 MODULE YET !!
// Express http/2 PR: https://github.com/expressjs/express/pull/3730
// See ./server-spdy.js for http/2 / SPDY support for Express using node-spdy
// 

const express = require('express'),
    http2 = require('http2'),
    fs = require('fs'),
    app = express();


app.get('/', (req, res) => res.send('Hello World!'))


http2.createSecureServer({
    key: fs.readFileSync('./tls/localhost.key'),
    cert: fs.readFileSync('./tls/localhost.crt'),
    allowHTTP1: true
}, app).listen(8000, () => console.log('Example app listening at https://localhost:8000'));
