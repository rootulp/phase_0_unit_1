// I worked by myself on this challenge.

// Pseudocode

// Define secretNumber as a number
// Set secretNumber equal to 7
// Define Password as a string
// Set Password equal to 'just open the door'
// Define allowedIn as boolean
// Set allowedIn should be false
// Define members as an array
// Toss John in the first spot in the array
// Toss Mary in the fourth spot in the array

// Write your code below.

var secretNumber = 7;
var password = "just open the door";
var allowedIn = false;
var members = ['John', '', '' , 'Mary'];

// Refactored Code: Include a refactored version (or justification of your original code) here. 

//Justification for code above? It passes the tests


// Reflection: Use the reflection guidelines to write a reflection here. 
// I liked this assignment. I learned what test driven development was 
// and I got to experiment with it. I don't understand why everyone uses
// the word assert for testing (is that just common convention?). Also 
// I don't think I would've been able to write the tests below. I'm curious
// as to how people come up with tests for programs they haven't written yet.

// Driver Code:  Do not alter code below this line.

function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (typeof secretNumber === 'number'),
  "The value of secretNumber should be a number.",
  "1. "
)

assert(
  secretNumber === 7,
  "The value of secretNumber should be 7.",
  "2. "
)

assert(
  typeof password === 'string',
  "The value of password should be a string.",
  "3. "
)

assert(
  password === "just open the door",
  "The value of password should be 'just open the door'.",
  "4. "
)

assert(
  typeof allowedIn === 'boolean',
  "The value of allowedIn should be a boolean.",
  "5. "
)

assert(
  allowedIn === false,
  "The value of allowedIn should be false.",
  "6. "
)

assert(
  members instanceof Array,
  "The value of members should be an array",
  "7. "
)

assert(
  members[0] === "John",
  "The first element in the value of members should be 'John'.",
  "8. "
)

assert(
  members[3] === "Mary",
  "The fourth element in the value of members should be 'Mary'.",
  "9. "
)

