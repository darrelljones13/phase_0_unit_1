// I worked on this challenge [by myself, with:]
 
// For each mission, write the title as a comment. (Shown here). Also include pseudocode as a comment. 
// Note: to make commenting easier, you can highlight the section you want to comment and hold 
// command + / This will comment the line. 
 
 // 1. Rescue Mission

 // Move down 2x
 // Move right
 // Move up 2x
 // Move right 2x
 // Move down
 // Attack!

 // This is your code controlling Tharin!

this.moveDown();
this.moveDown();
this.moveRight();
this.moveUp();
this.moveUp();
this.moveRight();
this.moveRight();
this.moveDown();
this.attackNearbyEnemy();

// 2. Grab the Mushroom
// Move right
// Move left
// Move up
//attack?

// Tharin might consider taking a detour after line 3.

this.moveUp();
this.moveRight();
this.moveLeft();
this.moveUp();
this.attackNearbyEnemy();

// 3. Drink Me
// Move right
// attack
// move right
// move down
// move up
// move right
// attack

this.moveRight();
this.attackNearbyEnemy();
this.moveRight();
this.moveDown();
this.moveUp();
this.moveRight();
this.attackNearbyEnemy();
 
 // 4. Taunt the Guards

 // To get the archer through the dungeon:
 // move right
 // say Follow me
 // move right x2
 // move up
 // move right
 // say Hey there
 // say attack x2
 // move down
 // move up
 //	say follow me
 // move right x2

 // // Now get Phoebe to follow through the dungeon.
this.moveRight();
this.say("Follow me.");
this.moveRight();
this.moveRight();
this.moveUp();
this.moveRight();
this.say("Hey there!");
this.say("Attack!");
this.say("Attack!");
this.moveDown();
this.moveUp();
this.say("Follow me.");
this.moveRight();
this.moveRight();

// 5. It's A Trap

//move down x2
//say Hey There
//move up x2

// Taunt the Ogre and run for cover!
this.moveDown();
this.moveDown();
this.say("Hey there");
this.moveUp();
this.moveUp();

 // 6.Taunt

 //Say some taunt x4

 this.say("Hey!");
// Lure the ogre right into your arrow trap
// by saying a few more things at him.
// Anything works!
this.say("Hey Jerk");
this.say("Over here!");
this.say("Arse");
 
 // 7. Cowardly Taunt

 //move to checkpoint (63,20)
 //move to checkpoint (50,16)
 //say a taunt
 //move to checkpoint (63,20)
 //move to checkpoint (70,10)
 // Run your soldier out where the ogres can hear you.
 this.moveXY(63,20);
 this.moveXY(50,16);
 // Say something!
 this.say("Hey");
 // Then run back behind the arrow towers for safety.
 this.moveXY(63,20);
 this.moveXY(70,10);
 // You can shift+click on the map to insert coordinates.
 
//8. Commanding Followers

//say follow me
//move to (63,46) coordinates
//say attack
//move away to (60,63) coordinates

this.say("Follow me.");
this.moveXY(63,46);
this.say("Attack!");
this.moveXY(60,63);

//9.  Mobile Artillery

//move to (61,30) coordinates
//attack x2 (for the big guy)
//move to (45,41)
//attack x2

// So, position and aim carefully.
this.moveXY(61,30);
this.attackXY(69,55);
this.attackXY(66,50);
this.moveXY(45,41);
this.attackXY(49,68);
this.attackXY(47,56);


// What is this referring to? Think programming-wise rather than in the terms of the game.

// this is an object. Whenever we added .move or .say to this, we gave it a property.

//What does the () do in JavaScript?

//The () gives the object a method.

//What is the point of the semicolons?

//From what I've researched, using semicolons in JavaScript seems to be a coding best practice.  They also separate line items of code.

// Reflection:

//I am very new to JavaScript in general, so CodeCombat was my first foray into the language.  I thoroughly enjoyed the gaming theme wrapped around a tutorial.  It made it a fun experience.  Interestingly, it helped solidify JS concepts I had previously been fuzzy on.  I was uncertain of the difference between properties and methods until completing this course.  The error messages helped with any typos I had keyed in. What I appreciated most were the quick visual responses to the code I had entered.  The instant feedback allowed me to make corrections quickly.
