function greet(greeting, honorific, name) {
  if (name) {
    return greeting + ', ' + honorific + ' ' + name;
  } else {
    name = honorific;
    return greeting + ', ' + name;
  }
}

console.log(greet('Hello', 'Mr.', 'VanDusen'));
console.log(greet('Hi', 'David'));
