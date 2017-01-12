// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      found(i);   // execute callback
    }
  }
}

function actionWhenFound(i) {
  console.log("Found him!", 'The position is', i);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);


// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  // arr.forEach(found)
  // arr.forEach(found)
    arr.forEach(function (name,i) {
      if (name === "Waldo") {
      found(i);   // execute callback
    }
    })
}

function actionWhenFound(i) {
  console.log("Found him!", 'The position is', i);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
