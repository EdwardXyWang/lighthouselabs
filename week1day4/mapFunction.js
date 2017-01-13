// given a list, myMap generate a new array to store initials of each string.
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
