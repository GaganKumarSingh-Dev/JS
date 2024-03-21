const id = 12345
let email = 'John@gmail.com'
var password = 'password'
city = "agra"

// const initialised_var;
var initialised_var;

console.table([id, email, password, city,initialised_var]);

// id = 67890; // cannot reassign a const variable
email = "gaggu@gmail.com"; // can be reassign
password = "67890"; // can be reassign
city = "mathura"; // can be reassign
initialised_var = "hey!"

console.log("\nUpdated Variables");
console.table([id, email, password, city,initialised_var]);