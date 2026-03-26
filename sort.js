// // Sort Basic alphabetical sort
// const fruits = ["dipkiran", "thapa", "phidim", "apple"];
// fruits.sort();
// console.log(fruits);

// // Sort Important: Case sensitivity
// const names = ["dipkiran", "thapa", "apple"];
// names.sort();
// console.log();

//Reverse (Z → A)
const names = ["dipkiran", "thapa", "apple"];
const filter1 = names.sort((a, b) => a.localeCompare(b));
console.log(filter1);
