// input = process.argv.slice(2).join('').split('');
// console.log(input[0]);
// console.log(typeof input[0]);

// var countLetter = {

// };

// var inputLetters = process.argv.slice(2).join('').split('');
// console.log("typeof iL", typeof inputLetters[0]);
// countLetter[inputLetters[0]] = 1;
// console.log("countletter", countLetter);

// var salesTaxRates = {
//   AB: 0.05,
//   BC: 0.12,
//   SK: 0.10
// };
// console.log(Object.getOwnPropertyNames(salesTaxRates)[0]);

// function bar() {
//     console.log(this);
// }
// bar();// global - because the method bar() belongs to the global object when invoked

// var foo = {
//     baz: function() {
//         console.log(this);
//     }
// }
// foo.baz();
// var word = new String('hello');
// var realWord = 'hello';
// console.log(word === realWord);
// console.log(this.word);
// console.log(word.String);
var test = function(arr) {
  for (var i = 0; i < arr.length; i ++) {
    return arr[i];
  }
}

console.log(test([1,2]));











