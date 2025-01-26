// Create a function greetings that accepts two parameters a string message and a function callback.

// The callback should always be console.log. If the function is not console.log then log to the console: "Provide correct callback."

// Else, greetings should call callback function with the message as argument.

// For example:

// Input: message = "Good Morning!", callback = prompt

// Output: "Provide correct callback."

const greetings = (message , callback) => {
  if(callback === console.log){
    return callback(message);
  }
  else{
    console.log("Provide correct callback.");
  }
};