// first part
var loadedDie = (function () {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  var i = 0;
  return function () {
    if (i !== list.length - 1){
      // console.log(list[i]);
      // first use then increment it
      return list[i++];
    } else {
      // console.log(list[i]);
      // return is always the last thing to appear!
      i = 0;
      return list[0];
    }
  }
})();

console.log(loadedDie());  // 5
console.log(loadedDie());  // 4
console.log(loadedDie());  // 6
console.log(loadedDie());
console.log(loadedDie());
console.log(loadedDie());
console.log(loadedDie());
console.log(loadedDie());
console.log(loadedDie());
console.log(loadedDie());  // last 5
console.log(loadedDie());  // new start
console.log(loadedDie());
console.log(loadedDie());
