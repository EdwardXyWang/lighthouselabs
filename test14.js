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








var a = ["hello", "world", "bob"];

console.log(a.map(function(element) {
  console.log(`Running foreach on ${element}`)
  return element.length;
}));

console.log(a)











