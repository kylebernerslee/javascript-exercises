const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
	if(array[0] === undefined)
    return 0;
  else
    return array.reduce((num, go) => num += go);
};

const multiply = function(array) {
  return array.reduce((num1, num2) => num1 = num1 * num2);
};

const power = function(num1, num2) {
	return Math.pow(num1, num2);
};

const factorial = function(num1) {

  if(num1 == 0)
    return 1;
  else {
	const num = [];
  for(i = 1; i <= num1; i++)
  {
    num.push(i);
  }
  const result = num.reduce((main, factor) => main = main * factor);
  return result;
  }
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
