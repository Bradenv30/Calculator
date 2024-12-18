const display = document.querySelector("#display");
const deleteButton = document.querySelector("#delete");
const clearButton = document.querySelector("#clear");
const numberButtons = document.querySelectorAll("[data-number]");
const operatorButtons = document.querySelectorAll("[data-operator]");
const enterButton = document.querySelector("#enter");
const decimalButton = document.querySelector("[data-decimal]");
let num1 = "";
let num2 = "";
let operator = "";

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

const operate = function (num1, operator, num2) {
  if (operator === "+") {
    return add(num1, num2);
  } else if (operator === "-") {
    return subtract(num1, num2);
  } else if (operator === "*") {
    return multiply(num1, num2);
  } else if (operator === "/") {
    return divide(num1, num2);
  }
};

let currentInput = "";
numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentInput += button.textContent;
    display.textContent = currentInput;
  });
});

operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (currentInput) {
      num1 = currentInput;
      operator = button.textContent;
      currentInput = "";
    }
  });
});

decimalButton.addEventListener("click", () => {
  if (!currentInput.includes(".")) {
    currentInput += ".";
    display.textContent = currentInput;
  }
});

deleteButton.addEventListener("click", () => {
  currentInput = currentInput.slice(0, -1);
  display.textContent = currentInput;
});

clearButton.addEventListener("click", () => {
  currentInput = "";
  num1 = "";
  num2 = "";
  operator = "";
  display.textContent = currentInput;
});

enterButton.addEventListener("click", () => {
  if (num1 !== "" && operator && currentInput !== "") {
    num2 = currentInput;
    let result = operate(num1, operator, num2);
    display.textContent = result;

    currentInput = "";
    num1 = "";
    operator = "";
  }
});
