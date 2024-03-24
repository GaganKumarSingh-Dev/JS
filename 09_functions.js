function func() {
  console.log("Hello World!");
  console.log("Hello World!");
}

func();

function add(num1, num2) {
  return num1 + num2;
}

console.log(add(2, 3));
console.log(add("a", 4));
console.log(add(null, 4));

function create_array(...nums) { //res operator
  const arr = [...nums]; //spread operator
  return arr;
}

console.log(create_array(100, 200, 300, 400, 500));

const user1 = {
    fname: "gaggu",
    age: 18
}
const user2 = {
    fname: "gaggu",
    ages: 18
}

function print_user(anyobject) {
  console.log(`${anyobject.fname} is ${anyobject.age} years old`);
}

print_user(user1);
print_user(user2); // 'undefined' problem 
