// input = process.argv.slice(2).join('').split('');
// console.log(input[0]);
// console.log(typeof input[0]);

// var countLetter = {

// };

// var inputLetters = process.argv.slice(2).join('').split('');
// console.log("typeof iL", typeof inputLetters[0]);
// countLetter[inputLetters[0]] = 1;
// console.log("countletter", countLetter);

var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};
console.log(Object.getOwnPropertyNames(salesTaxRates)[0]);