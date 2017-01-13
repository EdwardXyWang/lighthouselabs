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
var list = ["anaheim", "boston", "chicago", "detroit"];

//modifier - callback
//callback - function that is executed in response to an event
function printCity(city) {
  console.log("The city is: " + city);
  // return "The city is: " + city;
}

var a = list.forEach(printCity);

var b = list.map(printCity);

console.log(a);
console.log(b);
console.log(list.forEach(printCity));








