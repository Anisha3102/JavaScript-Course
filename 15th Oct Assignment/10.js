//10 Create a function displayInfo that takes three arguments: name, age, and city. If no city is provided, it should default to "Unknown".

function displayInfo(name,age,city="unknown"){
    
    return "I am "+name+"of "+age+"years"+" from "+city; 
}

let name="Anisha ";
let age=21;
let city="Bhubaneswar";
console.log (displayInfo(name,age,city));
