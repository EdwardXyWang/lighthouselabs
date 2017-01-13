var inputLetters = process.argv.slice(2).join('').toLowerCase().split('');

var result = {

};

var numberList = [];
for (var i = 0; i < inputLetters.length; i++) {
  numberList.push(i);
}
// console.log(numberList);

while (numberList.length !== 0) {
  numberListToModify = numberList.slice();
  result[inputLetters[numberList[0]]] = {
    appearNumber: 0,
    appearPosition: ''
  };
  for (var i in numberList) {
    if (inputLetters[numberList[0]] === inputLetters[i]) {
      result[inputLetters[numberList[0]]]['appearNumber'] ++;
      result[inputLetters[numberList[0]]]['appearPosition'] += (', ' + i);
      // console.log(i);
      numberListToModify.splice(i - (numberList.length - numberListToModify.length), 1);
    }
    // debugger;
  }
numberList = numberListToModify;
// console.log(numberList);
}
console.log(result);
// for (var i = 0; i < inputLetters.length; i++) {
//   for (var j = i; j < inputLetters.length; j++) {
//     if (!result.hasOwnProperty(inputLetters[j])) {
//       result[inputLetters[i]].count = 1;
//       result[inputLetters[i]].position = i;
//     } else {
//       result[inputLetters[i]].count ++;
//       result[inputLetters[i]].position += (', ' + j);
//     }
//   }
// }
