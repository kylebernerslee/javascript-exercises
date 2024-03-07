const palindromes = function (palindrom) {

    const palindrom_new = palindrom.toLowerCase().replace(/[^a-z0-9]/g, "");
    const palinArray = Array.from(palindrom_new);
    const reverse = new Array();
    for(i = 0; i < palinArray.length; i++) {
        reverse[palinArray.length - i - 1] = palinArray[i];
    }
    const palinReverse = reverse.reduce((a, b) => a += b);
    if(palindrom_new == palinReverse)
        return true;
    else
        return false;
};

// Do not edit below this line
module.exports = palindromes;
