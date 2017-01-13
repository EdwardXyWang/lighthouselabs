var inputString = process.argv.slice(2);
// The inputString has the form ["hello", "world"] as the input arguments are: hello wolrd.
var outputString = "";

for (var i = 0; i < inputString.length; i++) {
  // consider every element in the array.
  for (var j = 1; j < inputString[i].length; j++){
    // conisder every characters in each strings.
    outputString += inputString[i][j];
  }
  // append the first character and ay to the end
  outputString += (inputString[i][0] + "ay ");
}
// clean the extra space.
outputString.slice(0, outputString.length - 1);

console.log(outputString);