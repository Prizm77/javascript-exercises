const palindromes = function (string) {
    var wordAry = string.toLowerCase().replace(/[^a-z0-9]/g, "").split("");
    var reverseWord = wordAry.slice().reverse();

    var wordStr = wordAry.join("");
    var reverseWordStr = reverseWord.join("");

    return reverseWordStr === wordStr;
};


// Do not edit below this line
module.exports = palindromes;
