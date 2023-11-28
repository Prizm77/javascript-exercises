const getTheTitles = function(bookAry) {
    let titles = [];

    bookAry.forEach(book => {
        titles.push(book.title);
    }
    )
    return titles;

};


// Do not edit below this line
module.exports = getTheTitles;
