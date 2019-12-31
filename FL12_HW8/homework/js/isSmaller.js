let isBigger = function isBigger(a,b) {
    return(a>b);
}

let isSmaller = function isSmaller(a,b) {
    return !isBigger(a,b);
}

isSmaller(5, -1);