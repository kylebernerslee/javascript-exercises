const removeFromArray = function(source, ...pointer) {
    let endArray = new Array();

        source.forEach(item => {
            if(!pointer.includes(item))     
                endArray.push(item);
        });
    return endArray;
};

// Do not edit below this line
module.exports = removeFromArray;
