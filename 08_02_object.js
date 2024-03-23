const user = new Object();
// const user = {};

user.id = "12345678"
user.name = "gaggu"
user.isLoggedIn = false;

console.log(user);
console.log(Object.keys(user));

const regularUser = {
    email: "gaggu@gmail.com",
    fullname: {
        userFullName: {
            firstName: "gaggu",
            lastName: "singh"
        }
    }
}

console.log(regularUser);
console.log(regularUser.fullname.userFullName.lastName);

const obj1 = {1:'a', 2:'b'}
const obj2 = {3:'c', 4:'d'}

const obj3 = {obj1, obj2}
console.log(obj3);

const obj4 = Object.assign({},obj1, obj2); //all values in later object are goingg into obj1
// const obj4 = {...obj1, ...obj2}; // this syntax is similar to above Objecct.assign syntax
console.log(obj4);
console.log(Object.entries(obj4));

// ================================================================================

const course = {
    courseName: "html mastery",
    price: 1234,
    instructor: "gaggu"
}

const {instructor} = course;
console.log(instructor);

const {courseName: cname} = course;
console.log(cname);


