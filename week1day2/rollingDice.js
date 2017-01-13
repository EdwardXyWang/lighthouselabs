// var rollNumber = Number(process.argv.slice(2));
// var rollResult = "";

// function randomRoll() {
//   var singleRoll = Math.ceil(Math.random() * 6);
//   return singleRoll;
// }

// function rollDice(rollNumber) {
//   for (var i = 0; i < rollNumber; i++) {
//     rollResult += (randomRoll() + ", ");
//   }
//   rollResult = rollResult.slice(0, (rollResult.length - 2));
//   return rollResult;
// }

// console.log("Rolled", rollNumber, "dice:", rollDice(rollNumber));

var rollNumber = Number(process.argv.slice(2));
var rollResult = [];

function randomRoll() {
  var singleRoll = Math.ceil(Math.random() * 6);
  return singleRoll;
}

function rollDice(rollNumber) {
  for (var i = 0; i < rollNumber; i++) {
    rollResult.push(randomRoll());
  }
  rollResult = rollResult.toString().replace(/,/gi, ", ");
  return rollResult;
}

console.log("Rolled", rollNumber, "dice:", rollDice(rollNumber));