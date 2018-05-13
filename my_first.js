var http = require('http');
var dt = require('./my_first_module');

//create a server object:
http.createServer(function (req, res) {
  // HTTP header with the correct content type
  res.writeHead(200, {'Content-Type': 'text/html'});
  //write a response to the client
  res.write("The date and time time are currently: " + dt.myDateTime());
  //end the response
  res.end();
//the server object listens on port 8080
}).listen(8080);






