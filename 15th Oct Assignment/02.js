//2 Write a function calculatePrice that takes two arguments: price and taxRate. If taxRate is not provided, it should default to 5%.

function calculatePrice(price,taxRate=5/100){
    
    return price-(price*taxRate); ;
}

let price=50;
let taxRate;
console.log (calculatePrice(price,taxRate));
