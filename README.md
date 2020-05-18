# HTTP/2 Webservers
Examples of Node webserver engines using HTTP/2 protocol

## Compatability table
_Last updated on: May 18th, 2020_

Engine          | HTTP/2 support    | comment
------          | -----             | -------
Adonis          | Yes               |
Express         | [Using SPDY](express/server-spdy.js)  | [HTTP/2 support PR](https://github.com/expressjs/express/pull/3730)
Hapi            | Yes
Koa             | Yes
LoopBack        | No                | Uses Express but server configuration is limited
Nest            | Using SPDY        | Uses Express
Restify         | Yes
Sails           | No                | Uses Express but server configuration is limited
Strapi          | No                | Uses Koa but server configuration is limited
Total           | Using SPDY        | HTTP2 support will be added in a futere release (v4)