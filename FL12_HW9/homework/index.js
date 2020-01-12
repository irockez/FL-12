//Task 1

function convert(){
    let result = [];
    for (let i=0; i<arguments.length; i++){  
        if (typeof(arguments[i]) === 'string'){
            arguments[i] = Number(arguments[i]);            
        } else {
            arguments[i] =  arguments[i].toString();            
        }
        result.push(arguments[i]);
    }
    return result;
}
console.log(convert('1', 2, 3, '4'));

//Task 2

function executeforEach(array, callback){ 
    let result = [];
    for (let i=0; i<array.length; i++){
        result.push(callback(array[i]));
    }
    return result;
}
executeforEach([1,2,3], function(el){console.log(el * 2)});

//Task 3

function mapArray(array, callback) {    
    return executeforEach(array, callback);
}
console.log(mapArray([2, '5', 8], function(el) {return Number(el) + 3})); 

//Task 4

function filterArray(array, callback) { 
    let tmp = executeforEach(array, callback);
    let arr = [];

    for (let i = 0; i < tmp.length; i++) {
      if (tmp[i]) arr.push(array[i]);
    }
    return arr;
}
console.log(filterArray([2, 5, 8], function(el) { return el % 2 === 0}));

//Task 5

function flipOver(string) {
    let result = '';
    for (let i = string.length; i > 0; i--) {
      result += string[i-1];
    }
    return result;
}
console.log(flipOver('hey world'));

//Task 6

function makeListFromRange(array) {
    let result = [];
    let start = array[0];
    let end = array[array.length-1];
    if (start > end) {
        for (let i=start; i>end-1; i--){
            result.push(i);
        }
    } else {
        for (let i=start; i<end+1; i++){
            result.push(i);
        }
    }
    return result;
}
console.log(makeListFromRange([2, 7]));

//Task 7

function getArrayOfKeys(array, key) {
    return executeforEach(array, function(el) {
        return el[key];
      });
}
  
const actors = [
  {name: 'tommy', age: 36},
  {name: 'lee', age: 28}
];
console.log(getArrayOfKeys(actors, 'name'));

//Task 8

function substitute(array) {
    let result = [];
    mapArray(array, function(el) {
        result.push(el < 30 ? '*' : el);    
    });
    return result;
}
console.log(substitute([58, 14, 48, 2, 31, 29]));

//Task 9

function getPastDay(date, daysAgo) {
    let milliseconds = 86400000;
    let inputDate = Date.parse(date);
    let pastDate = new Date(inputDate - milliseconds * daysAgo);
    return pastDate.getDate();
}

let date = new Date(2019, 0, 2);

console.log(getPastDay(date, 1));
console.log(getPastDay(date, 2));
console.log(getPastDay(date, 365));

//Task 10

function formatDate(date) {
    let doubleDigit = 10;
    let Y = date.getFullYear();
    let M = date.getMonth() + 1;
    let d = date.getDate();
    let HH = date.getHours();
    let mm = date.getMinutes();
  
    if (HH < doubleDigit) {
      HH = '0' + HH;
    }
    if (mm < doubleDigit) {
      mm = '0' + mm;
    }
    
    return Y + '/' + M + '/' + d + ' ' + HH + ':' + mm;
}
  
console.log(formatDate(new Date('6/15/2018 09:15:00')));
console.log(formatDate(new Date()));