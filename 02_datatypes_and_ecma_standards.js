"use strict" // treal all js code as newer version

// alert(3+3) //Show error bcoz we are running it locally not in browser

// 7 Primitive Data types - Biglnt,String, Number, Boo learn, null, undefined, Symbol
// Non-Primitive(Reference) Data types - Array, Object, Function...

// Stack used in primitive type, heap used in non-primitive type

var str = "Joojo";

console.log(typeof str);
console.log(typeof undefined);
console.log(typeof null);

// Type Conversion (TypeCasting)

// 1) String to num
var str1 ="44"
console.log(typeof str1);

str1 = Number(str1)
console.log(typeof str1 + "\n");


const id = Symbol("123")
const anotherld = Symbol("123")
console.log("Symbol are same?  " + id === anotherld);


var str2 ="abcd"
console.log(typeof str2);

str2 = Number(str2)
console.log(str2 + " - " + typeof str2 + "\n");



var str3 = null
console.log(typeof str3);

str3 = Number(str3)
console.log(str3 + " - " + typeof str3 + "\n");



var str4 = undefined
console.log(typeof str4);

str4 = Number(str4)
console.log(str4 + " - " + typeof str4 + "\n");
 

// Type Conversion Problem

console.log(1 + 2);
console.log("1" + 2);
console.log(1 + "2");
console.log(1 + 2 + "3");
console.log("1" + 2 + 3);
console.log(1 + 2 + "2" + 3 + 4 + 5 + 6 + 7);

console.log(true);
console.log(+true);
console.log(+"");

