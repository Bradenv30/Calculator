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

function numOp(operator) {
  displayValue = "";
  num1 = displayValue;
  operator = operator;
}

function calculate(num1, operator, num2) {
  if (operator && num2 !== "") {
    let result;

    switch (operator) {
      case "+":
        result = parseFloat(num1) + parseFloat(num2);
        break;
      case "-":
        result = parseFloat(num1) - parseFloat(num2);
        break;
      case "*":
        result = parseFloat(num1) * parseFloat(num2);
        break;
      case "/":
        if (parseFloat(num2) === 0) {
          result = "Cannot divide by zero";
        } else {
          result = parseFloat(num1) / parseFloat(num2);
        }
        break;
    }
    if (result !== undefined) {
      displayValue = result;
      display.value = displayValue;
    }

    num1 = "";
    num2 = "";
    operator = "";
  }
}

/*
check display, if it has any of the operators, run that function and update display? How to assign num1 and num2 and operator
add the onclick to update display on the html. Create a function that will append to display for the html to call.
Create a function that will set the operator and store num 1
On the calculate function, let the disolay value be equal to the display value
case? how to call the calculate function. I should make it into one function so it is easy to call
*/

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
