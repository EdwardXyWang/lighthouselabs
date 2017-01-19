var http = require('http');
var express = require('express');
var app = express();

var hostname = '127.0.0.1';
var port = 3000;

var server = http.createServer(function(request, response) {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  response.end('Hello World\n');
});

server.listen(port, hostname, function() {
  console.log('Server running at http://' + hostname + ':' + port '/');
});
