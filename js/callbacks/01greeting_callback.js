/*
Problem: Pass Rahul to callback


Output: Hello Rahul
*/

function welcomeUser(callback) {
  callback("Rahul");
}

welcomeUser(name => {
  console.log(`Hello ${name}`);
});