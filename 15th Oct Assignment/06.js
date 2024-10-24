//6 Create a function multiply that takes two positional arguments x and y, with a default value for y as 1, and returns the result of multiplying them.

function multi(x,y=1){
    
    return x*y; 
}

let x=10;
let y=20;
console.log (multi(x,y));
