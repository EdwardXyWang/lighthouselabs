var inputLetters = process.argv.slice(2).join('').toLowerCase().split('');

function countAndPosition(inputLetters) {
  var result = {

  };

  for (var i = 0; i < inputLetters.length; i++) {
    if(!result.hasOwnProperty(inputLetters[i])) {
      result[inputLetters[i]] = {};
      result[inputLetters[i]]['frequency'] = 1;
      result[inputLetters[i]]['position'] = String(i);
    } else {
      result[inputLetters[i]]['frequency'] ++;
      result[inputLetters[i]]['position'] += ', ' + i;
    }
  };
  return result;
 }

console.log(countAndPosition(inputLetters));

