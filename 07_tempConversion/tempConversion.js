const convertToCelsius = function (x) {
  // x °F ≘ (x − 32) × ⁠5/9⁠ °C 
  let result = (x - 32) * (5 / 9);
  return Math.round(result * 10) / 10;
};

const convertToFahrenheit = function (x) {
  // x °C ≘ (x × ⁠9/5⁠ + 32) °F 
  let result = x * (9 / 5) + 32;
  return Math.round(result * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
