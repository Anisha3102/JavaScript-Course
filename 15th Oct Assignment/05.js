//5 Write a function makeSandwich that takes two arguments: breadType and filling. The default value for breadType should be "whole wheat".

function makeSandwich(breadType="whole wheat",filling){
    
    return "sandwich is made up of "+breadType+" and"+filling; 
}

let breadType;
let filling=" paneer ";
console.log (makeSandwich(breadType,filling));

