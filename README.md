# HTTP/2 Webservers
Examples of Node webserver engines using HTTP/2 protocol

## Compatability table
_Last updated on: May 18th, 2020_

Framework          | HTTP/2 support    | comment
------          | -----             | -------
Adonis          | Yes               |
Express         | [Using SPDY](express/server-spdy.js)  | [HTTP/2 support PR](https://github.com/expressjs/express/pull/3730)
Hapi            | Yes
Koa             | Yes
LoopBack        | No                | Uses Express but server configuration is limited
Nest            | Using SPDY        | Uses Express
Restana         | Yes
Restify         | Yes
Sails           | No                | Uses Express but server configuration is limited
Strapi          | No                | Uses Koa but server configuration is limited
Total           | Using SPDY        | HTTP2 support will be added in a futere release (v4)

## Q & A

#### Why not just use a reverse proxy?
A reverse proxy would be reasonable if the framework doesn't support HTTP/2 but it may not always be a desired thing to add.
Adding a reverse proxy means having another dependency to work with and may limit request handling if it's not correctly configured.
Some applications (like gateways or load balacers) made in Node require a direct connection to the client and thus profit by using frameworks that work with Node's native HTTP modules.

#### What are the benefits of HTTP/2
[Google has a detailed page about this](https://developers.google.com/web/fundamentals/performance/http2). \
While it fixes workarounds made in HTTP/1.1 it isn't backwards compatible with HTTP/1.x. Node has a compatibility API that still allows HTTP/1.x connections, as does the [SPDY package](https://github.com/spdy-http2/node-spdy).

#### Framework XX isn't in this list
Cool you found a framework that I haven't found or tested yet, or maybe I've had issues with it for some reason.
If you'd like to see this framework added, please check Issues for more information or create a new one if it doesn't exist yet. 