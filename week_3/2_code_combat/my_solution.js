// I worked on this challenge [by myself, with: Dylan]
 
// For each mission, write the title as a comment. (Shown here). Also include pseudocode as a comment. 
// Note: to make commenting easier, you can highlight the section you want to comment and hold 
// command + / This will comment the line. 
 
 //Rescue Mission

//Pseudocode
//Go Down x2
//Go Right
//Go Up x2
//Go Right x2
//Go Down x2
//Attack

//Solution Code
this.moveDown();
this.moveDown();
this.moveRight();
this.moveUp();
this.moveUp();
this.moveRight();
this.moveRight();
this.moveDown();
this.moveDown();
this.attackNearbyEnemy();
 

//Grab the Mushroom

//Pseudocode
//Move Up
//Move Right
//Move Left
//Move Up
//Attack

//Solution Code
this.moveUp();
this.moveRight();
this.moveLeft();
this.moveUp();
this.attackNearbyEnemy();
 
 //Drink Me

//Pseudocode
//Move Right
//Attack
//Move Right
//Move Down
//Move Up
//Move Right
//Attack

//Solution Code
this.moveRight();
this.attackNearbyEnemy();
this.moveRight();
this.moveDown();
this.moveUp();
this.moveRight();
this.attackNearbyEnemy();
 
//Taunt the Guards
//Pseudocode
//Move Right
//Break Door
//Move Right
//Taunt Guard
//Move left x2
//Say Attack - Kill guard
//Move Right
//Say Follow me
//Move Right x2
//Move Up
//Say Follow Me
//Move Right
//Say Attack x2
//Attack x2
//Say Follow Me
//Move Right x2

//Solution Code
this.moveRight();
this.bustDownDoor();
this.moveRight();
this.say("Hey there!");
this.moveLeft();
this.moveLeft();
this.say("Attack!");
this.moveRight();
this.say("Follow me.");
this.moveRight();
this.moveRight();
this.moveUp();
this.say("Follow me.");
this.moveRight();
this.say("Attack!");
this.attackNearbyEnemy();
this.say("Attack!");
this.attackNearbyEnemy();
this.say("Follow me.");
this.moveRight();
this.moveRight();
 
//It's a Trap
//Pseudocode
//Move downx2
//Taunt
//Move up
//Say Attack
//Move up

// Solution Code
this.moveDown();
this.moveDown();
this.say("Hey there");
this.moveUp();
this.say("Attack!");
this.moveUp();
 
//Break the prison

//Pseudocode
//Ask for players names
//Only return true for:
// William, Lucas, Marcus, Robert, Gordon

// Solution Code
if(name === "William")
    return true;
if(name === "Krogg")
    return false;  // <-- Start here; Krogg is not a friend!
if (name === "Lucas")
    return true;
if (name === "Gort")
    return false;
if (name === "Marcus")
    return true;
if (name === "Robert")
    return true;
if (name === "MARCUS")
    return false;
if (name === "Gordon")
    return true;

//Taunt

//Pseudocode
// Say x5

//Solution Code
this.say("Hey!");
this.say("Come here!");
this.say("Ogre!");
this.say("Taunt!");
this.say("Taunt again!");

//Cowardly Taunt

//Pseudocode
//Move inbetween towers
//Move towards ogres
//Say Taunt
//Move back inbetween towers

this.moveXY(50, 16);
this.moveXY(63, 20);
this.moveXY(70, 10); 
this.say("I can lure them in here.");
this.moveXY(50,20);
this.say("Taunt!");

//Commanding Followers

//Pseudocode
//Move to allies
//Say Follow
//Move to ogres
//Say Attack
//Run back

this.moveXY(49, 66);
this.moveXY(60, 63);
this.moveXY(75, 63);
this.say("Hail, friends!");
this.say("Follow");
this.moveXY(62,43);
this.say("Attack");
this.moveXY(75,63);

//Mobile Artillery

//Pseudocode
// Move within range
// Attack first group of ogres
// Move within range of other two camps
// Attack second group
// Attack again
// Attack third group
// Attack again

//Solution Code
this.moveXY(30, 26); 
this.attackXY(46, 5); 
this.moveXY(45,35);
this.attackXY(67,52);
this.attackXY(58,45);
this.attackXY(46,62);
this.attackXY(46,53);


// Reflection:
// Write your reflection here.

//I really didn't like Code Combat. I feel like it was a complete waste of time and was really tedious. The site crashed several times and gave me almost no insight into Javascript.
//Answers to Questions.
//This refers to Tharin in the game. In programming I think this refers to the current object.
//The parenthases in Java allow you to pass parameters to a function.
// Semicolons end the current statement or line of code.