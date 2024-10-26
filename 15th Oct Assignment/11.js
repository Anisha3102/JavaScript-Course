//11 Write a function orderPizza that takes two arguments: size and topping. If no topping is provided, it should default to "cheese".

function orderPizza(size,topping=" cheese"){
    
    return size +" inch pizza with " +topping; 
}

let size=6;
let topping=" paneer"
console.log (orderPizza(size,topping));
