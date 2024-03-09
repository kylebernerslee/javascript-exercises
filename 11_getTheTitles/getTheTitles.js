const getTheTitles = function(books) {
    let titleArray = []; 
    books.forEach((book, i) => titleArray[i] = book.title);
    return titleArray;
};

// Do not edit below this line
module.exports = getTheTitles;
