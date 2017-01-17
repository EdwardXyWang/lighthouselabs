// const http = require("http");
// const PORT = 8080;

// // a function which handles requests and sends response
// // function requestHandler(request, response) {
// //   response.end(`Requested Path: ${request.url}\nRequest Method: ${request.method}`);
// // }

// function requestHandler(request, response) {
//   if (request.url == "/") {
//     response.end("Welcome!");
//   } else if (request.url == "/urls") {
//     response.end("www.lighthouselabs.ca\nwww.google.com");
//   } else {
//     response.statusCode = 404;
//     response.end("Unknown Path");
//   }
// }

// var server = http.createServer(requestHandler);

// server.listen(PORT, () => {
//   console.log(`Server listening on: http://localhost:${PORT}`);
// });


function foo() {
  // console.log(x);
  // console.log(y);

  // const x = {};
  if (true) {
    const y = 2;
  }
  console.log(y);
  // x.a = 'b';
  // console.log(x);
}

foo();
// console.log(x);