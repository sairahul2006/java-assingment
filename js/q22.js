// Q22. Check property "email"
let user = {
  name: "Rahul",
  email: "abc@gmail.com"
};

console.log("email" in user); //.hasOwnProperty 
// Output: true // boolean value we are checking 


/*

if(user.email){
console.log("Email property exists");
}
else{
  console.log("Email property does not exists");
  }

  //  other then this we use (email in user) or user.hasOwnProperty("email")

  // if we use user.email it doesnot checks null, undefined,0, or ""
  */