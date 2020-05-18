var fs = require('fs')
var restify = require('restify')

var srv = restify.createServer({
    http2: {
        key: fs.readFileSync('./tls/localhost.key'),
        cert: fs.readFileSync('./tls/localhost.crt'),
        allowHTTP1: true
    }
});

srv.get('/', function (req, res, next) {
    res.send({ status: 'Success', silly_html: 'https://localhost:8000/html' })
    next();
});

srv.get('/html', (req, res, next) => {
    res.header("Content-Type", "text/html")
    res.write(fs.readFileSync('./index.html'))
    res.end()
})

srv.listen(8000, function () {
    console.log('ready on %s', srv.url)
});