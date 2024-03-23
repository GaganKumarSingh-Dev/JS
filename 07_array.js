const myArr = [1,2,3,4,5,6,7];
const heros = ["superman", "batman", "ironman"]
const numArr = new Array(1,2,3,4)

console.log(myArr[1]);
console.log(myArr[7]);
myArr.push(8)
console.log(myArr[7]);
myArr.pop()
console.log(myArr[7]);

console.log(myArr.includes(4));
console.log(myArr.includes(43));
console.log(myArr.includes("3"));


console.log(myArr.indexOf(5))
console.log(myArr.indexOf(900))

const newArr = myArr.join(); //convert all element into string and add them to a new array
console.log(myArr, typeof myArr);
console.log(newArr, typeof newArr);

const myArr1 = myArr.slice(1,4);
console.log(myArr1);
const myArr2 = myArr.splice(1,4); //include last index element 
console.log(myArr2);

myArr2.push(myArr1);
console.log(myArr2);
console.log(myArr2[4][1]);
console.log(myArr2[2][1]);

const myArr3 = myArr2.concat(myArr1);
console.log(myArr3);

const arr1 = [myArr1, myArr2];
console.log(arr1);
console.log(arr1.flat(Infinity));


// merge two array using spread operator
const arr2 = [...myArr1, ...myArr2];
console.log(arr2);


console.log(Array.isArray("Gagan"));
console.log(Array.from("Gagan"));

console.log(Array.of(100,200,300));