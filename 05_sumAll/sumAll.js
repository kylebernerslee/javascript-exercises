const sumAll = function(numberFrom, numberTo) {
    let sum = 0;
    let lowNumber;
    let highNumber;

    if(numberFrom < 0 || numberTo < 0)
        return "ERROR";

    if(!(typeof numberTo === 'number') || !(typeof numberFrom === 'number'))
        return "ERROR";

    if(Array.isArray(numberFrom) || Array.isArray(numberTo))
        return "ERROR";    

    if(numberFrom < numberTo)
    {
        lowNumber = numberFrom;
        highNumber = numberTo;
    }
    else
    {
        lowNumber = numberTo;
        highNumber = numberFrom;
    }

    for(i = lowNumber; i < (highNumber+1); i++)
    {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
