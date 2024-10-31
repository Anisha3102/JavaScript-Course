//26 Write a function divideNumbers that takes two arguments: a and b, with b defaulting to 1 if not provided.

function divideNumbers(a,b=1){
    
    return a/b; 
}

let a=10;
let b=5;
console.log (divideNumbers(a,b));
