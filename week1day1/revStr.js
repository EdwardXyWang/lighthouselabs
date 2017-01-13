var inputString = String(process.argv.slice(2));
inputString = inputString.replace(/,/g, " ");
// The String funcion will convert the blank space into a comma, so I convert it back.
var outputString = "";

// This funcion convert a non-space word reversely.
function reverseStrings (inputString) {
  var outputString = "";
  for (var i = 0; i < inputString.length; i++){
    outputString += inputString[inputString.length - 1 - i];
  }
  return outputString;
}

// This function fulfill the requirements.
function reverseStringsWithSpace (inputString) {
  var tempOutput = "";
  for (var i = 0; i < inputString.length; i++) {
    if (!(/\s/.test(inputString[i]))) {
      tempOutput += inputString[i];
    } else {
      outputString += reverseStrings(tempOutput);
      outputString += "\n";
      tempOutput = "";
    }
  }
  outputString += reverseStrings(tempOutput);
  return outputString;
}

console.log(reverseStringsWithSpace(inputString));
