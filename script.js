let num1;
let num2;
let operator;

const add = function (num1, num2) {
  return num1 + num2;
};
const subtract = function (num1, num2) {
  return num1 - num2;
};
const multiply = function (num1, num2) {
  return num1 * num2;
};
const divide = function (num1, num2) {
  if (num2 === 0) {
    return "Cannot divide by zero";
  }
  return num1 / num2;
};

const operate = function (num1, num2, operator) {};
