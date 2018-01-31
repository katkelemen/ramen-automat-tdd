function times(n, p) {
    return n > 0 ? p + times(n - 1, p) : "" 
}

function digitToRoman(a) {
    "use strict";
    if (a < 4 ) {
        return times(a, "I")    
    } else if (a == 4) {
        return 'IV'
    } else if (a == 5) {
        return 'V'
    } else if (a > 5 && a < 9) {
        return 'V' + times(a - 5, 'I')
    } else if (a == 9) {
        return 'IX'
    } 
}

function toRoman(a) {
    let tens = Math.floor(a / 10);
    let last = a % 10;
    return times(tens, "X") + digitToRoman(last);
}

module.exports = toRoman;