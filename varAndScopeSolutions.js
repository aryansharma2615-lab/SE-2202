// Global scope
var message = "hello world!";

function greetingFunction(saySomethingElse) {
  // Function scope
  var message = "hi!";
  console.log(message); 

  if (saySomethingElse) {
    // Block scope
    let message = "hello!";
    console.log(message); 
  }
}

//DO NOT change the next 3 lines
greetingFunction(); // "hi!"
greetingFunction(true); // "hi!" then "hello!"
console.log(message); // "hello world!"

if (true) {
  var message = "goodbye!";
}

console.log(message); // "goodbye!"
