// I paired with Steve Loar on this challenge.




// Pseudocode
// Create variable secretNumber to 0
// SET secretNumber to 7
// Create variable password "string"
// SET password to "just open the door"
// Create variable allowedIn and set to false
// Create variable members as an array
// SET members array position 1 to "John"
// Set members array position 4 to "Mary"


// __________________________________________
// Write your code below.

var secretNumber = 7;
var password = "just open the door";
var allowedIn = false;
var members = ["John", "Steve" , "Darrell", "Mary"];



// __________________________________________
// Refactored Code: Include a refactored version (or justification of your original code) here. 
// Changes are reflected above. 
// Changed secretNumber value from 0 to 7
// Changed password from "string' to "just open the door"
// Changed "Mary" position from 5 to 4 in the array




// __________________________________________
// Reflection: Use the reflection guidelines to write a reflection here. 
// After pairing with Steve, I learned that this challenge was not as difficult as at first glance.  One trick he showed me was how to really use node in the terminal.  I was able to save the file and quickly see my changes.  Much easier than using the JS console in Chrome. I feel pretty confident in the learning competencies after working on this challenge.  I'm also starting to feel more comfortable with JS syntax.
// 
// 
// 
// 
// 


// __________________________________________
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

