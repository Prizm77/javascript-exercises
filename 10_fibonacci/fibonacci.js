const fibonacci = function(num) {
    if (num < 0) return "OOPS";
    if (num <= 2) return 1;

    let a = 1, b = 1, next;

    for (let i = 3; i <= num; i++) {
        next = a + b;
        a = b;
        b = next
    }
    return b;
};

// Do not edit below this line
module.exports = fibonacci;
