function isPalindrome(s) {
  var stringReverse = s.split(' ').join('').split('').reverse().join('');
  s = s.split(' ').join('');
  return s == stringReverse;
}

module.exports = isPalindrome;

// console.log(module.exports);
