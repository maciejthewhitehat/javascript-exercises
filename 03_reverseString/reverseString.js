let i,
    array,
    string;

const reverseString = function(string) {
    array = [];
    for(i = string.length - 1; i >= 0; i--) {
        array.push(string.charAt(i));
    }
    result = array.join("");
    return result;
};

// Do not edit below this line
module.exports = reverseString;
