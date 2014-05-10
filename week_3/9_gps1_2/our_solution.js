// GPS 1.2 - JavaScript

// YOUR FULL NAMES:
//  1. Darrell Jones
//  2. Molly Huerster


// 0. "YOU SIGNED... WHO?!"

var Tina_Fey ={
	name: "Tina Fey",
	age: 43,
	quote: "Nerds!"
};

var Aziz_Ansari ={
	name: "Aziz Ansari",
	age: 31,
	quote: "Treat yo-self!"
};


// 1. "Here they Come!"

var Adam_Sandler ={
  name: "Adam Sandler",
  age: 47,
  quote: "That's your home! Are you too good for your home?!"
  };
  
var Kristen_Bell ={
  name: "Kristen Bell",
  age: 33,
  quote: "Do you wanna build a snowman?"
  };
  
var Jim_Carrey ={
  name: "Jim Carrey",
  age: 52,
  quote: "...So you're telling me there's a chance? YEAH!"
  };

// 2. "TIME IS MONEY!"

//YOUR CODE HERE!

var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");
shooterMcGavin.constructor === Client;
shooterMcGavin.age === 48;
shooterMcGavin.quote === "Just stay out of my way... or you'll pay. Listen to what I say.";

var client_array = [Adam_Sandler, Kristen_Bell, Jim_Carrey, Tina_Fey, Aziz_Ansari]

function Client(actor_name, actor_age, actor_quote) {
  this.name = actor_name;
  this.age = actor_age;
  this.quote = actor_quote;
  }

// 3. "SHOW 'EM OFF!"

var clientProperties = function(clientName) {
    console.log("This actor's name is "+clientName.name+" who is " +clientName.age+ " years old. "  +clientName.name+ "\'s favorite quote is \"" +clientName.quote+ ".\"");

// 4. "But wait, there's more!"

var showQuote = function(actor) {
  	console.log(actor.quote);
  }
  //we can call the actors' quotes by calling showQuote(actor)

showQuote(Jim_Carrey)

// ** BONUS **


//  Your Reflection:
//I enjoyed pairing with Molly on this one.  After our GPS, we both got to a point where we couldn't figure out the next step without some more practice.  We did just that, regrouped and finished the work.  I feel pretty comfortable with the Javascript objects and functions, at least with the basic ones.  I'm still learning how to read and understand the debugging messages in JS. Because our session was so early in the week, I wasn't as familiar with JS as I would have liked.  I would have preferred having a few of the other modules under my belt.  We did however, work well in troubleshooting our misconceptions and getting to a solution. 



