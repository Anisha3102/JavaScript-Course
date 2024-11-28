
//73. Use reduce to implement a method that compresses an array to unique values


const emails = ["test@domain.com", "admin@site.org"];

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const allValid = emails.every(email => emailRegex.test(email));

console.log(allValid); 
