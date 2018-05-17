//Require the http module
var http = require('http');
//Create a handler function
var message = 'This is just to test the server is working';
function handler (request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write(message);//response body
  response.end(); //finish response
}

//Initialise the server
var server = http.createServer(handler);
//Start listening for potential requests
server.listen(3000, function () {
  console.log("Server is listening on port 3000. Ready to accept requests!");

})
