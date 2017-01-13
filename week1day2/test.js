var reassignable = "I am in the global scope";

function reassigner() {
   reassignable = "I am in the block scope";
}

console.log(reassignable); //>> “I am in the global scope”
reassigner();
console.log(reassignable); // >> “I am in the block scope”


var myVar = "global";

function myFunction() {
   myVar1 = "local";
  console.log(myVar1); // prints "local"
}
myFunction();
console.log("myVar is:", myVar1);  // prints "global"

var myString = 'Hello World. How are you doing?';
var splits = myString.split(' ', 3);

console.log(splits);

function validMonth(month) {
    return month && month >= 1 && month < 12;
  }
  console.log(123);
