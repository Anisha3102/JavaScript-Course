//22 Write a function describePet that accepts two arguments: petName and petType. If no petType is provided, it should default to "dog".

function describePet(petName,petType="dog"){
    
    return petName+" has a"+petType; 
}

let petName=" som";
let petType=" cow";
console.log (describePet(petName,petType));


