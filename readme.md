# Node.js

Node.js is an open source server environment.

Node.js allows you to run JavaScript on the server.

##Example

```javascript
var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World!');
}).listen(8080);
```