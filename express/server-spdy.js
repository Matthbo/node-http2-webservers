const express = require('express'),
    fs = require('fs'),
    spdy = require('spdy'),
    path = require('path'),
    app = express();

app.all('/', (req, res) => res.send({ status: "Success", silly_html: "https://localhost:8000/html" }))

app.all('/html', (req, res) => res.sendFile(path.join(__dirname + '/index.html')))

spdy.createServer({
    key: fs.readFileSync('./tls/localhost.key'),
    cert: fs.readFileSync('./tls/localhost.crt')
}, app).listen(8000, () => console.log('Started Express server (using SPDY) on https://localhost:8000'))
