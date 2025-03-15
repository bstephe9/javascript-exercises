const repeatString = function (string, n) {
  if (n < 0)
    return "ERROR";

  let newString = "";
  for (let i = 0; i < n; i++) {
    newString += string;
  }
  return newString;
};

// Do not edit below this line
module.exports = repeatString;
