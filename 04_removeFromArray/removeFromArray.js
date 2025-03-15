const removeFromArray = function(A, ...args) {
  return A.filter(x => !args.includes(x));
};

// Do not edit below this line
module.exports = removeFromArray;
