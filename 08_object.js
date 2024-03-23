// Object Literals

const mySymbol = Symbol();
const mySymbol1 = Symbol("key");

const user = {
    "full name": "gagan",
    age:18,
    [mySymbol]: "key1",
    mySymbol1, 
    email:"gks@gmail.com",
    loggedIn: false 
} 

console.log(user);
console.log(user.age);
console.log(user["age"]);

// problem
// console.log(user.full name); here is the problem
console.log(user["full name"]);
console.log(user[mySymbol]);
console.log(typeof user[mySymbol]);
console.log(typeof user["mySymbol1"]);

user["email"] = "gagan@gmail.com";
// Object.freeze(user);
user["email"] = "gagansingh@outlook.com";

console.log(user);

user.greeting = function() {
    console.log("Hello World!");
}
user.greeting2 = function() {
    console.log(`Hello World! Your age is ${this.age}`); //using 'this' we can access object key-values
}
console.log(user);

user.greeting();
user.greeting2();













// Using constructor Method

Object.create



// Singleton
