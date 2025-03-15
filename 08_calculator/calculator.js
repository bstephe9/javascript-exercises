const add = function (x, y) {
  return x + y;
};

const subtract = function (x, y) {
  return x - y;
};

const sum = function (A) {
  let sum = 0;

  for (let i = 0; i < A.length; i++) {
    sum += A[i];
  }

  return sum;
};

const multiply = function (A) {
  if (A.length == 0)
    return 0;

  let result = 1;

  for (let i = 0; i < A.length; i++) {
    result *= A[i];
  }

  return result;
};

const power = function (x, y) {
  let result = x;

  for (let i = 1; i < y; i++) {
    result *= x;
  }

  return result;
};

const factorial = function (x) {
  let result = 1;

  for (let i = x; i > 0; i--) {
    result *= i;
  }

  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

console.log(power(4, 3));