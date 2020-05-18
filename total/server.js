// ===================================================
// FOR DEVELOPMENT
// Total.js - framework for Node.js platform
// https://www.totaljs.com
// ===================================================

require('total.js').http('debug');

// We add a new web server
var spdy = require('spdy');
var fs = require('fs');

var options = {
    key: fs.readFileSync('./tls/localhost.key'),
    cert: fs.readFileSync('./tls/localhost.crt'),
};

spdy.createServer(options, F.listener).listen(8000);