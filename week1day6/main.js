var fs = require("fs");


// Create a readable stream
// var data = '';
// var readerStream = fs.createReadStream('input.txt');
// // console.log(typeof readerStream);
// // console.log(readerStream);
// // Set the encoding to be utf8.
// readerStream.setEncoding('UTF8');

// // Handle stream events --> data, end, and error
// readerStream.on('data', function(chunk) {
//    data += chunk;
// });
// console.log(data);
// readerStream.on('end',function(){
//    console.log(data);
// });

// readerStream.on('error', function(err){
//    console.log(err.stack);
// });

// console.log("Program Ended");
// -----------------------------
var data = 'Simply Easy Learning';

// Create a writable stream
var writerStream = fs.createWriteStream('output.txt');

// Write the data to stream with encoding to be utf8
writerStream.write(data,'UTF8');

// Mark the end of file
writerStream.end();

// Handle stream events --> finish, and error
writerStream.on('finish', function() {
    console.log("Write completed.");
});

writerStream.on('error', function(err){
   console.log(err.stack);
});

console.log("Program Ended");