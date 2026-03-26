/** 
1. Template Literals
2. Destructuring (Array, Object)
3. Spread Operator
4. Array Methods
5. Arrow Function
*/

// Template Literals
const name = "ram";
const age = 20;
const address = "Ithari";
const templateResult = `Hello My Name is ${name} i am ${age} old. I live in ${address}`;
console.log(templateResult);

//**Objecect Destructuring*/
const course = {
  title: "MERN Stack",
  duration: "3 Months",
  Instructor: "SAM",
  Fee: 2500,
};
// Object Destructuring
const { title, duration, Instructor, fee: courseFee } = course;
console.log(title);
console.log(duration);
console.log(Instructor);
console.log(courseFee);
// Youcan change the veriables also you can see fee: courseFee




const person = {
name: "dipKiran",
course: "MERN",
age:25,
fee:2500,
}
const {name, course, age, fee:schoolFee} = person;
console.log(schoolFee);










// Array Destructuring
const students = ["Ram", "Mohan", "Hari"];
const [std1, std2, std3, std4] = students;
console.log(std1, std2, std3, std4);

// Spread Operator : To Copy Data (...)
const user = {
  name: "Shyam",
  age: 25,
  address: "Dharan",
};

const details = {
  education: "BE",
  skill: "MERN",
  experience: "5 years",
};

const aut = {
  email: "dipkiran2008@gmail.com",
  password: "12345",
  isActive: true,
  role: "USER",
};

const userDetails = { ...user, ...details, ...aut }; //... will copy all data from the user array
console.log(userDetails);

// Spread Operator Array
const list1 = [1, 2, 3, 45, 55, 65];
const list2 = [10, 20, 30, 40, 50];
const finalList = [...list1, ...list2];
console.log(finalList);

// Arrow Function
const sum = (value1, value2) => {
  console.log(value1 + value2);
};
sum(10, 20);

//function don't have name is called  anonymous Function
function (){} // Anonymous function
function ()=>{} // Anonymous Arrow Function