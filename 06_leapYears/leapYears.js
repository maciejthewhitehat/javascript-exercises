const leapYears = function(year) {
    if(Number.isInteger(year)) {
        if(Number.isInteger(year / 4)) {
            if(Number.isInteger(year / 100) && Number.isInteger(year / 400)) {
                return true;
            }
            else {
                if(Number.isInteger(year / 100) && !(Number.isInteger(year / 400))) {
                return false;
                }
                else {
                    return true;
                }
            }
        }
        else {
            return false;
        }
    }
    else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = leapYears;
