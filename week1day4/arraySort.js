var testArray = [1, 2, 5, 9, 10];

var sortedResult = testArray.sort(compareNumerically)

function compareNumerically(a, b) {
  return a - b;
}

// console.log(sortedResult);
//-------------------------------
var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];
var studentsCopy = students.slice();

var sortStudent = students.sort(compareStudent);
console.log(sortStudent);

function compareStudent(a, b) {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  if (a.name === b.name) {
    return b.age - a.age;
  }
}
console.log(students);

function isAgeOver25(ageNum) {
  return ageNum.age > 25;
}

console.log(studentsCopy.filter(isAgeOver25));
console.log(studentsCopy);


//Extract students' names
// var studentsNames = [];
// students.forEach(function (ele) {
//   studentsNames.push(ele.name);
// });
//The following line is equivalent to the previouse lines.
// students.forEach(ele => studentsNames.push(ele.name));

// console.log(studentsNames);
// console.log(studentsNames.sort());
