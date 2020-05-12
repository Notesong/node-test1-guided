function add(...values) {
  return values.reduce((a, b) => a + b, 0);
}

function subtract(a = 0, b = 0) {
  return a - b;
}

function divide(a = 1, b = 1) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Expected a number");
  }
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

function multiply(a = 0, b = 0) {
  return a * b;
}

module.exports = {
  add,
  subtract,
  divide,
  multiply,
};
