var password = String(process.argv.slice(2));

// Heads up: String is immutable.
function obfuscate(password){
  var newPassword = "";
  for (var i = 0; i < password.length; i++){
    switch (password[i]) {
    case "a":
      newPassword += 4;
      break;
    case "e":
      newPassword += 3;
      break;
    case "o":
      newPassword += 0;
      break;
    case "l":
      newPassword += 1;
      break;
    default:
      newPassword += password[i];
    }
  }
  return newPassword;
}

console.log(obfuscate(password));
