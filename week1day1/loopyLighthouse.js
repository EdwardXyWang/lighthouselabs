// This algorithm is brilliant! It is much more similar to how human beings think:
// we make three judges.
for (var index = 100; index <= 200; index++) {
  var output = "";
  if (index % 3 === 0) {
    output += "Loopy";
  }
  if (index % 4 === 0) {
    output += "Lighthouse";
  }
  console.log(output === "" ? index : output)
}