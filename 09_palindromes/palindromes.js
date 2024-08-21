const palindromes = function (string) {
    const characterTable =  [];
    let j = 0;
    for(i = 0; i < string.length; i++) {
        if(string.charAt(i).match(/[A-Za-z0-9]/)) {
            if(string.charAt(i).match(/[A-Za-z]/)) {
                tempChar = string.charAt(i);
                lowercaseTempChar = tempChar.toLowerCase();
                characterTable[j] = lowercaseTempChar;
            }
            else {
                characterTable[j] = string.charAt(i);
            }
        j++;
        }
    }
    for(k = 0; k < characterTable.length; k++) {
        if(characterTable[k] !== characterTable[characterTable.length - k - 1]) {
            return false;
        }
    }
    return true;
};
// Do not edit below this line
module.exports = palindromes;
