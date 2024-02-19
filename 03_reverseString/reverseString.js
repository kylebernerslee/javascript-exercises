const reverseString = function(string) {
    let Original = string;
    let Reverse = new Array();

    for(i = 0; i <= Original.length; i++)
    {
        Reverse.push(Original[Original.length - i]);
    }
    return Reverse.join("");
};

// Do not edit below this line
module.exports = reverseString;
