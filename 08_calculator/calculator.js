const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(arry) {
  let added = 0;
  arry.forEach(num => {
    added += num;
  })
  return added;
};

const multiply = function(arry) {
  let answer = 1;
  arry.forEach(num => {
    answer *= num;
  })
  return answer;
};

const power = function(a, b) {
  return a ** b;	
};

const factorial = function(num) {
  if (num === 0 || num === 1)
    return 1;
  for (var i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
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
