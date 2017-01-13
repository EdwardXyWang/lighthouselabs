// turn arguments into an array.


function foo(){
  console.log(arguments);
  console.log(arguments[55]);
  console.log(arguments.length)
  console.log(arguments.slice);
  var arg2 = Array.prototype.slice.call(arguments);
  console.log(arg2);
  console.log(arg2.slice);

  var arg3 = [];
  for (var i = 0; i<arguments.length; i++){
    arg3.push(arguments[i]);
  }

  arguments.pop(0)
}

var three = [[[]]]
foo(1, 'two', three);