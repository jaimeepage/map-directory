//Require the http module
var http = require('http');
//Initialise the server
var server = http.createServer();
//Start listening for potential requests
server.listen(3000, function () {
  console.log("Server is listening on port 3000. Ready to accept requests!");

})
