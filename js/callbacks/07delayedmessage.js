/*
Problem: Display delayed message using callback


Output:
Loading...
Welcome Back! (after 2 seconds)
*/

console.log("Loading...");

setTimeout(() => {
  console.log("Welcome Back!");
}, 2000);