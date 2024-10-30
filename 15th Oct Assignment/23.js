//23 Create a function calculateArea that accepts two arguments: length and width. If width is not provided, it should default to the same value as length (for a square).

function calculateArea(length,width=length){
    
    return length*width; 
}

let length=20;
let width=10;
console.log (calculateArea(length,width));
