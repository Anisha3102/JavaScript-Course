//25 Create a function createUserProfile that accepts three arguments: name, email, and role. If no role is provided, it should default to "user".

function createUserProfile(name,email,role="user"){
    
    return name+"\n"+email+"\n"+role; 
}

let name="Anisha";
let email="anny37@gmail.com";
let role="student";
console.log (createUserProfile(name,email,role));
