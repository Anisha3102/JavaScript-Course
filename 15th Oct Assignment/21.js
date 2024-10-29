//21 Create a function discountPrice that takes two positional arguments: price and discountPercentage. If no discount is provided, it should default to 10%.

function discountPrice(price,discountPercentage=10/100){
    
    return price-(price*discountPercentage/100); 
}

let price=500;
let discountPercentage=50;
console.log (discountPrice(price,discountPercentage));
