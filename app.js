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

// // Object
// // In Object also you can add array also
// const details = {
//   name: "rohan Shrestha",
//   faculty: "BSC CSIT",
//   age: 25,
//   address: {
//     city: "Dharn",
//     province: "Koshi",
//   },
//   phone: [981444444, 9811111111],
// };
// console.log(details); //Print all Deatils in Object
// console.log(details.name); // Print Only Name Varibale which is in Object
// console.log(details["name"]); // Print only Name

// // // Intiger Number
// // let num1 = 10.5;
// // let num2 = 100.5;
// // let sum = num1 + num2;
// // console.log(sum.toPrecision(4));

// // Array
// // In Array you can store any time of data you can store object, number, string, bolean
// // In Arrary always will be index value.
// const grades = [3, 2, 4, 2.5, 3.9];
// const test = [321, "hello", true, false, { class: 10, faculty: "BCA" }];
// console.log(test);
// console.log(test[0]);
// console.log(test[4]["class"]);

console.log("------------------Operator--------------");

// Operators
// .1 Arithmetic Operator
// .2 Relational Operator
// 3. Logical Operators

// Arithmetic Operator
// console.log(5 + 6);
// console.log(15 - 6);
// console.log(5 * 6);
// console.log(15 / 6);
// console.log(15 % 6);

// Relational Operator
// console.log(10 < 15) Less then True
// console.log(10 > 15) 10 is greater then 15. False

// if- else statement
// let light = "green";
// if (light === "red") {
//   console.log("stop");
// } else if (light === "green") {
//   console.log("go");
// }

// Switch

// const day = "Tusday";
// switch (day) {
//   case "Sunday":
//     console.log("Holiday");
//     break;
//   case "Monday":
//     console.log("Working day");
//     break;
//   case "Tusday":
//     console.log("Working Day");
//     break;
// }

// Ternary Operator
// let age = 0;
// age >= 18 ? console.log("Adult") : console.log("Children");

console.log("---------------Loop-----------------");
// Loop Repeating over and over, round and round
// 1. for
// 2. while
// 3. do while
// 4 .forEach

// // For
// for(start PointerEvent; CSSConditionRule; increment/decrement)
// increment value will be at start
// let a = 1;
// for (let a = 1; a <= 100; a++) {
//   console.log(a);
// }

//While loop
// Increment value will be at end
// while(condition){
//   code
// }

// let i = 1;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

console.log("------------------list----------");
// const student = ["ram", "hari", "shyam"];
// for (let i = 0; i < 3; i++) {
//   console.log(student[i]);
// }

// For Each
// const student = ["ram", "hari", "shyam"];
// student.forEach(function (name) {
//   console.log(name);
// });

// Using for...of (modern & simple)
// const student = ["ram", "hari", "shyam"];
// for (let name of student) {
//   console.log(name);
// }

// Using a loop (most common)
// const student = ["ram", "hari", "shyam"];
// for (let i = 0; i < student.length; i++) {
//   console.log(student[i]);
// }
