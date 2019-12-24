let a = Number.parseInt(prompt('input a', ''), 10);
let b = Number.parseInt(prompt('input b', ''), 10);
let c = Number.parseInt(prompt('input c', ''), 10);
let x1,x2,d;

if (Number.isNaN(a) || Number.isNaN(b) || Number.isNaN(c) || (a==0 && b==0)) {
  console.log ('invalid input data');
} else {
    if (a===0) {
      x1 = (-1*c/b)
      console.log ('x = ' + x1)
    } else {
        d = Math.pow(b,2) - (4*a*c);
        if (d < 0) {
          console.log ('Discriminant less than zero. No solution')
        } else if (d===0) {
          console.log ("D = 0. x = " + -b/2*a);
        } else {                          
          x1 = (-b + Math.sqrt(d)) / (2*a);
          x2 = (-b - Math.sqrt(d)) / (2*a);
          console.log ("D = " + d + ". x1 = " + x1 + ". x2 = " + x2);
        }
    }
}