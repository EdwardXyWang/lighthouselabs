var fs = require("fs");
// console.log(fs);

// var filePath = "./test_sync.txt";
// var fileData = "Testing synchronous file write.\n";

// var test = fs.writeFileSync(filePath, fileData);
// console.log("successfully wrote to", filePath);

var filePath = "./test_async.txt";
var fileData = "Testing asynchronous file write.\n";

const test = fs.writeFile(filePath, fileData, function(err) {
  if (err) {
    throw err;
  }
  console.log("Successfully wrote to", filePath);
});
console.log(typeof test);
console.log(test);


// function f() {
//     var a = [{yellow: "blue"}, {red: "cyan"}, {green: "magenta"}];
//     var b = a[1];
//     a[1].red = "tan";
//     // what is the value of b now and why?
//     console.log(b);
//     b.red = "black";
//     // did the value of a[1].red change when I assigned to b.red?
//     console.log(a[1]);
//   }


// f();



// function changeStuff(a, b, c)
// {
//   a = a * 10;
//   b.item = "changed";
//   c = {item: "changed"};
//   // return a;
//   // return b;
//   // return c;
// }

// var num = 10;
// var obj1 = {item: "unchanged"};
// var obj2 = {item: "unchanged"};

// changeStuff(num, obj1, obj2);

// console.log(num);
// console.log(obj1.item);
// console.log(obj2.item);
// console.log(changeStuff(num, obj1, obj2));


