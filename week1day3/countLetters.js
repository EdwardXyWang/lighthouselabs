var inputLetters = process.argv.slice(2).join('').split('');

var countLetter = {

};
var counter = 0;

while(inputLetters.length !== 0) {
  var inputLettersBackUp = inputLetters.slice();
  for (var i = 0; i < inputLetters.length; i++){
    switch(inputLetters[i]) {
      case inputLettersBackUp[0]:
      counter += 1;
      inputLetters.splice(i, 1);
      i--;
      break;
    }
  }
  countLetter[inputLettersBackUp[0]] = counter;
  counter = 0;
};

console.log(countLetter);