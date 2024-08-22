const fibonacci = function(number) {
    if(number >= 0) {
        const fibonacciTable = [];
        fibonacciTable[0] = 0;
        fibonacciTable[1] = 1;
        fibonacciTable[2] = 1;
        for(i = 2; i <= number; i++) {
            fibonacciTable[i] = fibonacciTable[i-1] + fibonacciTable[i-2];
        }
        return fibonacciTable[number];
    }
    else return "OOPS";
};

// Do not edit below this line
module.exports = fibonacci;
