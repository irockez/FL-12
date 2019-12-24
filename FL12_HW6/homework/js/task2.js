let a = Number.parseInt(prompt('input a', ''), 10);
let b = Number.parseInt(prompt('input b', ''), 10);
let c = Number.parseInt(prompt('input c', ''), 10);

if (Number.isNaN(a) || Number.isNaN(b) || Number.isNaN(c)) {
  alert ('input values should be ONLY numbers');
} else if ((a===0) || (b===0) || (c===0)) {
    alert ('A triangle must have 3 sides with a positive definite length');
} else if (((a+b)<=c) || ((a+c)<=b) || ((b+c)<=a)) {
    alert ("Trianlge doesn't exist");
    console.log ("Trianlge doesn't exist");
} else {
    if ((a===b) && (a===c)) {
        console.log ('Equilateral triangle');
    } else if ( ((a===b) && (a!=c)) || ((a===c) && (a!=b)) || ((b===c) && (b!=a))){
        console.log ('Isosceles triangle');
    } else {
        console.log ('Scalene triangle');
    }
}