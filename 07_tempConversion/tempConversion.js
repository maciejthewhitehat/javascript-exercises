const convertToCelsius = function(givenTempInFahrenheit) {
  tempInCelcius = Number((givenTempInFahrenheit - 32) / (9/5));
  
  if(!Number.isInteger(tempInCelcius)) {
    roundedTempInCelcius = Math.round(tempInCelcius * 10) / 10;
  }
  else {
    roundedTempInCelcius = tempInCelcius;
  }

  return roundedTempInCelcius;
};

const convertToFahrenheit = function(givenTempInCelcius) {
  tempInFahrenheit = Number((givenTempInCelcius * (9/5)) + 32);

  if(!Number.isInteger(tempInFahrenheit)) {
    roundedTempInFahrenheit = Math.round(tempInFahrenheit * 10) / 10;
  }
  else {
    roundedTempInFahrenheit = tempInFahrenheit;
  }

  return roundedTempInFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
