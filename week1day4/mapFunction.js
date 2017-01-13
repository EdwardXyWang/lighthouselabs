var testArray = ["ground", "control", "to", "major", "tom"];

function myMap(testArr, func){
  var returnArray = [];
  for(var i = 0; i < testArr.length; i++) {
    returnArray.push(func(testArr[i]));
  }
  return returnArray;
};

function myFunc(word) {
  return word[0];
}

console.log(myMap(testArray, myFunc));

// console.log(myMap(testArray));
// console.log(returnArray);
// console.log(myMap(testArray, function (testArray) {
//   return testArray.length;
// }));