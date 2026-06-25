/*
Problem: Pass result to callback


Output: Result: Pass
*/

function checkResult(callback) {
  callback("Pass");
}

checkResult(result => {
  console.log(`Result: ${result}`);
});