const sumAll = function (x, y) {
  if (x < 0 || y < 0) {
    return "ERROR";
  }

  if (!Number.isInteger(x) || !Number.isInteger(y)) {
    return "ERROR";
  }

  // Allows function to work with larger numbers first
  if (x > y) {
    [x, y] = [y, x];
  }

  let sum = 0;

  for (let i = x; i <= y; i++) {
    sum += i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
