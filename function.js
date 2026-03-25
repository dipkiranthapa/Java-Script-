// function Syntax
// function <functionName>(parameter){
//   code
// }

// Step1
function square() {
  const value = 5;
  console.log(value * value);
}

// Step2

function multiply(value) {
  console.log("Total", value * value);
}
multiply(10, 10);

// Function using rest operator
function myFunction(...num) {
  let sum = 0;
  for (let e of num) {
    sum += e;
  }
  console.log(sum);
}
myFunction(10, 20, 30);

function greet(name) {
  console.log("Hello " + name);
}
greet("dipkiran");

// Result Return in Function
function sumReturn(value1, value2) {
  const result = value1 + value2;
  return result;
}

const returnResult = sumReturn(10, 20);
console.log(returnResult);

const btn = document.getElementById("btn");
let color = ["red", "orange"];
let index = 0;

// DOM
btn.addEventListener("click", function () {
  document.body.style.background = color[index];
  index++;

  if (index >= color.length) {
    index = 0;
  }
});
