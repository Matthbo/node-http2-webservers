# HTTP/2 Webservers
Examples of Node webserver engines using HTTP/2 protocol

## Compatability table
_Last updated on: May 18th, 2020_

Engine          | HTTP/2 support    | comment
------          | -----             | -------
Express         | [Using SPDY](express/server-spdy.js)
Hapi            | Yes
Koa             | Yes
Nest            | Using SPDY    | Uses Express
Sails           | No            | Uses Express but is barely configurable