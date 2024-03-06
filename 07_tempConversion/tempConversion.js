const convertToCelsius = function(number) {
  return (Math.round(((number-32)/1.8) * 10) / 10);
};

const convertToFahrenheit = function(number) {
  return (Math.round((number * 1.8 + 32) * 10) / 10);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
