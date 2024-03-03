// EXAMPLE 1 - Get the First Digit of a Number in JavaScript

const num = 123456;

// ✅ get first digit of number as string
const firstDigitStr = String(num)[0];
console.log(firstDigitStr); // 👉️ 1
console.log(typeof firstDigitStr); // 👉️ string

// ✅ get first digit of number as integer
const firstDigitNum = Number(firstDigitStr);
console.log(firstDigitNum); // 👉️ 1
console.log(typeof firstDigitNum); // 👉️ number

// ------------------------------------------------------------------

// // EXAMPLE 2 - Getting the last digit of a number

// // 👇️ Decimal numbers
// const num1 = 1357.579;
// const lastDigit1Str = String(num1).slice(-1); // 👉️ '9'
// const lastDigit1Num = Number(lastDigit1Str); // 9

// // 👇️ Integers
// const num2 = 1357;
// const lastDigit2Str = String(num2).slice(-1); // 👉️ '7'
// const lastDigit2Num = Number(lastDigit2Str); // 👉️ 7

// // ----------------------------------------------

// // 👇️ using modulo % operator (without conversion)
// const num = 123456;

// const lastDigit = num % 10;
// console.log(lastDigit); // 👉️ 6

// ------------------------------------------------------------------

// // EXAMPLE 3 - Getting the last N digits of a number

// function getLastNdigits(number, n) {
//   return Number(String(number).slice(-n));
// }

// const num = 123456789;

// // 👇️ get the last 2 digits of a number
// console.log(getLastNdigits(num, 2)); // 👉️ 89

// // 👇️ get the last 3 digits of a number
// console.log(getLastNdigits(num, 3)); // 👉️ 789

// // 👇️ get the last 4 digits of a number
// console.log(getLastNdigits(num, 4)); // 👉️ 6789

// ------------------------------------------------------------------

// // EXAMPLE 4 - Get the first Digit of a Number using a `while` loop

// function getFirstDigit(num) {
//   let first = num;

//   while (first >= 10) {
//     first = first / 10;
//   }

//   return Math.floor(first);
// }

// console.log(getFirstDigit(123456)); // 👉️ 1
// console.log(getFirstDigit(9877)); // 👉️ 9
// console.log(getFirstDigit(45678)); // 👉️ 4
// console.log(getFirstDigit(0)); // 👉️ 0

// ------------------------------------------------------------------

// // EXAMPLE 5 - Get the last digit of a number using modulo `%` operator

// function getLastDigit(num) {
//   return num % 10;
// }

// console.log(getLastDigit(123456)); // 👉️ 6
// console.log(getLastDigit(12345)); // 👉️ 5
// console.log(getLastDigit(1234)); // 👉️ 4
// console.log(getLastDigit(123)); // 👉️ 3

// ------------------------------------------------------------------

// // EXAMPLE 6 - Get the first N digits of a Number using `match()`

// const number = 123456789;

// const match = String(number).match(/[0-9]{2}/)[0];

// console.log(match); // 👉️ 12

// ------------------------------------------------------------------

// // EXAMPLE 7 - Get the last digit of a number using `Array.pop()`

// function getLastDigit(num) {
//   return Number(String(num).split('').pop());
// }

// console.log(getLastDigit(123456)); // 👉️ 6
// console.log(getLastDigit(12345)); // 👉️ 5
// console.log(getLastDigit(1234)); // 👉️ 4
// console.log(getLastDigit(123)); // 👉️ 3
