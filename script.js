const display = document.getElementById("display");

let num1 = "";
let num2 = "";
let operator = "";
let displayValue = "";

function appendToDisplay(input) {
  if (input === "." && displayValue.includes(".")) {
    return;
  }
  displayValue += input;
  display.value = displayValue;
}

function clearButton() {
  displayValue = "";
  num1 = "";
  num2 = "";
  operator = "";
  display.value = displayValue;
}

function deleteButton() {
  displayValue = displayValue.slice(0, -1);
  display.value = displayValue;
}

function numOp(op) {
  if (displayValue !== "") {
    num1 = displayValue;
    operator = op;
    displayValue = "";

    console.log("num1:", num1);
    console.log("operator:", operator);
  }
}

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  if (num2 === 0) {
    return "ERROR";
  }

  return num1 / num2;
}

function calculate(num1, operator, num2) {
  num1 = Number(num1);
  num2 = Number(displayValue);

  console.log("Before calculation:");
  console.log("num1:", num1);
  console.log("operator:", operator);
  console.log("num2:", num2);

  let result;
  if (operator === "+") {
    result = add(num1, num2);
  } else if (operator === "-") {
    result = subtract(num1, num2);
  } else if (operator === "*") {
    result = multiply(num1, num2);
  } else if (operator === "/") {
    if (num2 === 0) {
      result = "ERROR"; // Handle division by zero
    } else {
      result = divide(num1, num2);
    }
  }
  if (result !== null) {
    displayValue = result;
    display.value = displayValue;
  }
}

/*
check display, if it has any of the operators, run that function and update display? How to assign num1 and num2 and operator
add the onclick to update display on the html. Create a function that will append to display for the html to call.
Create a function that will set the operator and store num 1
On the calculate function, let the disolay value be equal to the display value
case? how to call the calculate function. I should make it into one function so it is easy to call
*/
