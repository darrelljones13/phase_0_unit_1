// I worked with David Hwang on this challenge

// Your mission description:
// Objective: Grab the magic mushroom and double your size (Super Mario style).
// 


// Pseudocode
// 1. SET horizontal & vertical grid as an array
//  2. ASSIGN both grid length to 5.   
//  3. INIT tharin as literal
//      SET tharin horizontal and literal value to 0,0
//      SET tharin size to 1 (max 30)
//      SET tharin speed to 1
//      SET tharin attack to 10
//  5. INIT mushrooms 
//      ASSIGN horizontal & vertical property to middle of grid 
//      SET sizeIncrease to 2

// Initial Code

var horizontal = [];
horizontal.length = 5;

var vertical = [];
vertical.length = 5;


var tharin = {
    x: 0,
    y: 0,
    size: 1,
    speed: 1,
    attack: 10,
    
    moveUp: function(){
        this.y += 1;
        console.log("You have moved up one space.");
    },
    
    moveDown: function(){
        this.y -= 1;
        console.log("You have moved down one space.");
    },
    moveRight: function(){
        this.x += 1;
        console.log("You have moved one space to the right.");
    },
    moveLeft: function(){
        this.x -= 1;
    console.log("You have moved one space to the left.");

    }
};

var mushrooms = {
    x: 2,
    y: 2,
    sizeIncrease: 2
};

if(tharin.x == mushrooms.x && tharin.y == mushrooms.y){
    tharin.size += mushrooms.sizeIncrease;
};


tharin.moveUp();
tharin.moveUp();
tharin.moveRight();
tharin.moveRight();
tharin.size;


// Refactored Code

delete tharin.attack;
//There are no ogres on this level.  Tharin can put his sword away for this one.


// Reflection
// David and I had some great ideas to start with, but also had crazy weeks and ultimately decided to create something relatively simple and straightforward for this challenge.  We struggled with creating a grid for Tharin to move through.  Once we figured that out, we played around with his movements and size change.  I also added some console.log printouts for each movement that was keyed in.
// 
// 
// 
// 
// 
// 
// 