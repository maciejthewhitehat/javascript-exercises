const sumAll = function(num1, num2) {
    sum = 0;
    if(Number.isInteger(num1) && Number.isInteger(num2)) {
        if(num1 < 0 || num2 < 0) {
            return "ERROR";
        }

        if(num1 < num2) {
            for(i = num1; i <= num2; i++) {
                sum += i;
            }
        }
        else {
            if(num1 > num2) {
                for(i = num2; i <= num1; i++) {
                    sum += i;
                }
            }
        }
        return sum;
    }
    else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;
