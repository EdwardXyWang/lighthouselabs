/*
 * Write a loop that joins the contents of conceptList together
 * into one String, concepts, with each list item separated from
 * the previous by a comma.
 *
 * Note: you may not use the built-in Array join function.
 */

var conceptList = ["gists", "types", "operators", "iteration", "problem solving"];

function joinList(conceptList)  {
  var stringList = "";
// a custom function written by you (you must define it too!)
  for (var i = 0; i < conceptList.length; i++){
    stringList += conceptList[i] + ", ";
  }
  stringList = stringList.slice(0,(stringList.length - 2));
  return stringList;
}

// You don't need to delete the last two by judging if the index has reached the last one, i.e., isolate the comma and
// decide if add it based on the fact that if the index has reached the maximum.

var concepts = joinList(conceptList);

// Write your code here...

console.log("Today I learned about " + concepts + ".");

