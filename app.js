// Print in Console;
// console.log("hello World");
// console.error("this is error");
// console.warn("this is warrning");
// console.info("this is info");

// Variable: const, let , var
// Variable is a Memory Element: Store Temporary Data

//convert into sting
// var number = 10;
// number = number.toString();
// console.log(typeof number);

// convert sting into number
// var a = "10";
// a = Number(a);
// console.log(typeof a);

// Note: Never use Var Variable

// // Data Types
// 1. String "Ram"
// 2. Number 50,56.3
// 3. Boolean true, false
// 4. Object {key:value}
// 5. Array [12,13,14,15]

// const studentName = "Rohan Shrestha";
// const faculty = "BSC CSIT";
// const gpa = 3.5;
// const isPass = true;
// console.log(studentName, faculty, gpa, isPass);

// Object
// In Object also you can add array also
const details = {
  name: "rohan Shrestha",
  faculty: "BSC CSIT",
  age: 25,
  address: {
    city: "Dharn",
    province: "Koshi",
  },
  phone: [981444444, 9811111111],
};
console.log(details); //Print all Deatils in Object
console.log(details.name); // Print Only Name Varibale which is in Object
console.log(details["name"]); // Print only Name

// // Intiger Number
// let num1 = 10.5;
// let num2 = 100.5;
// let sum = num1 + num2;
// console.log(sum.toPrecision(4));

// Array
// In Array you can store any time of data you can store object, number, string, bolean
// In Arrary always will be index value.
const grades = [3, 2, 4, 2.5, 3.9];
const test = [321, "hello", true, false, { class: 10, faculty: "BCA" }];
console.log(test);
console.log(test[0]);
console.log(test[4]["class"]);
