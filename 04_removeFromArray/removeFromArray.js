const removeFromArray = function(array, ...args) {
    for(i of args) {
        for(j = 0; j < array.length; j++) {
            if(i === array[j-1]) {
                array.splice(j-1, 1);
            }
            if(i === array[j]) {
                array.splice(j, 1);
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
