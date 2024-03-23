const score = 400
console.log(score, typeof(score));

// We can explicitly decide the type of varible
const balance = new Number(100)
console.log(balance, typeof(balance));

console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(2));


const float_num = 18.93882

console.log(float_num.toPrecision(2));
console.log(float_num.toPrecision(3));
console.log(float_num.toPrecision(4));

const hundreds = 10000000000
console.log(hundreds.toLocaleString('en-US'));
console.log(hundreds.toLocaleString('en-IN'));


console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.NaN);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.EPSILON);

// =========================================================================================================

// Maths

console.log("\n",Math); //run in browser console get more info
console.log(Math.abs(-100)); 
console.log(Math.abs(100)); 
console.log(Math.round(9.49)); 
console.log(Math.round(9.8));
console.log(Math.ceil(9.5));
console.log(Math.floor(9.5));

console.log(Math.sqrt(16));
console.log(Math.pow(5,2));

console.log(Math.max(5,2,6,9,2,1));

console.log(Math.random());
console.log(Math.random()*10);
console.log((Math.random()*10) + 1); //min value is one 
console.log(Math.floor(Math.random()*10) + 1); //min value is one 

const min = 1
const max = 6
console.log(Math.floor(Math.random() * (max - min + 1)) + min); 




