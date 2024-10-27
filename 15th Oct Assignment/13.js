//13 Write a function introducePerson that takes two positional arguments name and profession, with profession defaulting to "Student".

function introducePerson(name,profession="Student"){
    
    return name+" is a "+profession; 
}

let name="Anisha";
let profession="Web developer";
console.log (introducePerson(name,profession));
