// // var numbers = [1, 2, 3, 4, 5, 7, 10, 14, 17, 18];
// // var evens = numbers.filter(function(num) {
// //   return (num % 2 == 0);
// // });
// // console.log("Subset of even numbers:", evens);

// var outer = function() {
//   var x = 10;

//   var inner = function() {
//     console.log("Value of x is: " + x);
//   }
//   return inner;
// };

// // var foo = outer();
// var foo = outer();
// console.log(outer());
// console.log(foo());
// console.log('   ');
// console.log(foo);
// // foo();

// var sum1 = function sum2(a,b) {
//   return a+b;
// };

// console.log(sum1());
// -------------------------------------------
// var list = ["anaheim", "boston", "chicago", "detroit"];

// function printCity(city) {
//   console.log("The city is: " + city);
//   return city.toUpperCase();
// }

// function ourForEach(list, cb) {
//   for (var i = 0; i < list.length; i++) {
//     //applying modifier behaviour
//     cb(list[i]);
//   }
// }

// function ourMap(list, cb) {
//   var returnArr = [];

//   for (var i = 0; i < list.length; i++) {
//     returnArr.push(cb(list[i]));
//   }

//   return returnArr;
// }

// var returnEachVal = ourForEach(list, printCity);
// console.log("ourForEach returned: ", returnEachVal);


// var returnMapVal = ourMap(list, printCity);
// console.log("ourMap returned: ", returnMapVal);

// --------------------------------------------------
// var list = ["anaheim", "boston", "chicago", "detroit"];

// //modifier - callback
// //callback - function that is executed in response to an event
// function printCity(city) {
//   console.log("The city is: " + city);
//   // return "The city is: " + city;
// }

// var a = list.forEach(printCity);

// var b = list.map(printCity);

// console.log(a);
// console.log(b);
// console.log(list.forEach(printCity));

// function xPrinterMaker(x)
// {
//   return function xPrinter()
//   {
//     console.log('Value of x is: '+ x);
//   }
// }


// var print5 = xPrinterMaker(5);

// console.log(print5());
// console.log(print5());
// console.log(print5());
// console.log(print5());


// var foo = function outerFunction() {
//   console.log('running outerFunction')
//   var x = 10;

//   return function innerFunction() {
//     console.log('Running innerFunction')
//     console.log("Value of x is: " + x);
//   }
// }();

// foo;
// console.log('');
// console.log(foo);
// console.log(' ');
// foo();
// console.log(' ');
// console.log(foo());

// min/max number in an array
var numbers = [5, 6, 2, 3, 7];

// using Math.min/Math.max apply
var max = Math.max.apply(null,numbers);
// This about equal to Math.max(numbers[0], ...)
// or Math.max(5, 6, ...)

var min = Math.min.apply(null, numbers);
console.log(max);
console.log(min);


function Thing(stuff)
{
  this.stuff = stuff;
}

Thing.prototype.foo = function foo()
{
  console.log(this.stuff);
}


var x = new Thing('asdasdasdasd');

x.foo.call({stuff:123});






