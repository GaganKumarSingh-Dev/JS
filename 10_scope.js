let outside1 = 1;
const outside2 = 2;
var outside3 = 3;

console.log(outside1);
console.log(outside2);
console.log(outside3);

if (outside1 === 1) {
  var inside1 = 4;
  const inside2 = 5;
  let inside3 = 6;
}

console.log(inside1);
// console.log(inside2);
// console.log(inside3);

// var variable got no global and block scope

function one() {
  const username = "hitesh";
  function two() {
    const website = "youtube";
    console.log(username);
  }
  // console.log(website); // Can't be access outside the 'two function' scope
  two();
}
one();

// Similar in nested if-else


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Hoisting

addone(5);

function addone(num) {
  console.log(num+1);
}


// Error occur when function reference it initialized in variable

// addtwo(5);

// const addtwo = function(num) {
// console.log(num+2);
// }
