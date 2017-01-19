var fs = require('fs');
var data = '';
var readerStream = fs.createReadStream('./test_async.txt');

readerStream.on('data', function (chunk) {
  data += chunk;
})
  .on('end', function () {
    console.log(data);
  });

