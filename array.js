/** For Each */
// // Make double value in array list
// // const list = [1, 2, 3, 550, 51, 52, 63, 45];
// // const dblList = [];
// // for (let i = 0; i < list.length; i++) {
// //   const dblValue = list[i] * 2;
// //   dblList.push(dblValue);
// // }
// // console.log(dblList);

// const list = ["kiran", "Kiran"];
// let dblList = [];
// for (let i = 0; i < list.length; i++) {
//   const datalist = list[i] * 2;
//   dblList.push(datalist);
// }
// console.log(dblList);

/** For Each Function will Show all data */
// const name = ["dipkiran", "thapa"];
// name.forEach(function (name) {
//   console.log(name);
// });

/** MAP */
// // map() creates a new array by transforming each item in the original array.
// const list = [1, 2, 3, 4];
// const listItem = list.map(function (item) {
//   return item * 2;
// });
// console.log(listItem);

/** Map Example */
// const num1 = [10, 20, 30, 40];

// const result = num1.map(function (num) {
//   const addNum = num * 2;
//   return addNum;
// });
// console.log(result);

/** MAP Example 1: Double numbers */
// const numbers = [1, 2, 3, 4, 5];
// const newNumber = numbers.map((num) => num * 2);
// console.log(newNumber);

/** MAP Example 2: Convert to uppercase */

// const person = ["ram", "hari", "shyam"];
// const result = person.map((name) => name.toUpperCase());
// console.log(result);

/** MAP Example 3: Add text to Each item */
// const person = ["ram", "hari", "shyam"];
// const greetings = person.map((name) => "Hello " + name);
// console.log(greetings);

/** MAP Example 4: Array of objects */
// const user = [
//   { name: "DipKiran", age: 25 },
//   { name: "Ram", age: 25 },
// ];
// const names = user.map((user) => user.name);
// console.log(names);

/** Filter: Array.filter */
// const number = [10, 20, 30, 50];
// const result = number.filter(function (num) {
//   return num > 20;
// });
// console.log(result);

/** Example Short Arrow Function */
// const numbers = [10, 20, 30, 50];
// const result = numbers.filter((num) => num > 20);
// console.log(result);

/** Example Filter Even Number */
// const numbers = [10, 11, 12, 13, 14, 15];
// const evens = numbers.filter((num) => num % 2 === 0);
// console.log(evens);

/** Example Filter String  filter with character */
// const person = ["dipkiran", "thapa", "ram", "thapa"];
// const result = person.filter((name) => name.length > 4);
// console.log(result);

/**Find Array */
// const student = [
//   {
//     name: "ram",
//     age: 25,
//     faculty: "BCA",
//   },
//   {
//     name: "hari",
//     age: 45,
//     faculty: "BBS",
//   },
//   {
//     name: "Sita",
//     age: 42,
//     faculty: "BSC",
//   },
//   {
//     name: "Sita Ram",
//     age: 50,
//     faculty: "BIT",
//   },
// ];

// const findResult = student.find((value) => value.name === "ram");
// console.log(findResult);

/**
 Includes: Array.Includes(a)=> return boolean value
 * Some : array.some(a)=> boolean
 *Every : array.some(a)=> boolean
 */

const numbers = [10, 20, 30, 40];
const result = numbers.includes(10);
console.log(result);

// Some String Check
const person = [{ name: "dipkiran" }, { name: "thapa" }];
const personResult = person.some((value) => value.name === "dipkiran");
console.log(personResult);
