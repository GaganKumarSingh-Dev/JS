console.log(Date);
console.log(Date.now());

let myDate = new Date();
console.log(myDate);

console.log(myDate.getTime());
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

let myCreatedDate = new Date(2024,2,23,7,40,41);
console.log("my created date -", myCreatedDate.toLocaleString());
console.log(myCreatedDate.getTime());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log("Time in seconds", Math.floor(myTimeStamp/1000));

let newDate = new Date();
console.log(newDate.getFullYear());

console.log(newDate.toLocaleString('default', {
    weekday: "long"
}));