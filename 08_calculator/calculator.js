const add = function(addNum1, addNum2) {
	addResult = addNum1 + addNum2;
  return addResult;
};

const subtract = function(substractNum1, substractNum2) {
	substractResult = substractNum1 - substractNum2;
  return substractResult;
};

const sum = function(sumArray) {
  sumResult = 0;

	for(i = 0; i < sumArray.length; i++) {
    sumResult += sumArray[i];
  }

  return sumResult;
};

const multiply = function(multiplyArray) {
  multiplyResult = 1;

  for(j = 0; j < multiplyArray.length; j++) {
    multiplyResult = multiplyResult * multiplyArray[j];
  }

  return multiplyResult;
};

const power = function(powerNumber, powerValue) {
	powerResult = 1;

  for(k = 1; k <= powerValue; k++) {
    powerResult = powerResult * powerNumber;
  }
  
  return powerResult;
};

const factorial = function(factorialNumber) {
  if(factorialNumber < 0) {
    return "ERROR";
  }
  else {
    if(factorialNumber == 0) {
      factorialResult = 1;
    }
    else {
      factorialResult = 1;

      for(l = 1; l <= factorialNumber; l++) {
        factorialResult = factorialResult * l;
      }
    }
    
    return factorialResult;
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
