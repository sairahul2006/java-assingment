// Q25. Shallow copy and deep copy
let original = {
  name: "Rahul",
  address: {
    city: "hyd"
  }
};


let shallowCopy = { ...original };

let deepCopy = JSON.parse(JSON.stringify(original));


// modifying
original.address.city = "chennai";


console.log("original:",original);
console.log("shallow copy :" , shallowCopy)
console.log("deep copy:" , deepCopy);

// original : { name: 'Rahul', address:{city:'chennai' } }

// shallow copy: { name: 'Rahul', address: {city:'chennai'} }

//deep copy: { name: 'rahul' , address:{city: 'hyd'} }

//shallow copy shares object references , so city changes 
//deep copy creates independent copy, so city doesnot changes