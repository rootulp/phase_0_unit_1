// I worked with Cassie Moy on this challenge

// Your mission description:
// I want a character image that can move using buttons
// And a finish line. When the character is moved to the finish line
// Let the user know that they won

// Pseudocode
// create objects for the player and finish line
// Set the images of both objects
// Set the position / x and y coordinates of both
// Test the position after every move function
//  If character position = finish line position , alert YOU WIN

// Initial Code
var imgObj = null;
var imgObjFin = null;
function init(){
   imgObj = document.getElementById('myImage');
   imgObj.style.position= 'relative'; 
   imgObj.style.left = '0px'; 
   imgObj.style.top='0px';

   imgObjFin = document.getElementById('finishLine');
   imgObjFin.style.position= 'relative'; 
   imgObjFin.style.left = '150px'; 
   imgObjFin.style.top='0px';
}

function moveRight(){
   imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px';
   mainTest();
}

function moveLeft(){
    imgObj.style.left = parseInt(imgObj.style.left) - 10 + 'px';
    mainTest();
}

function mainTest(){
    if (imgObj.style.left == '200px') {
        alert("YOU WIN!");
    }
}

window.onload = init;

// function moveUp(){
//     imgObj.style.top = parseInt(imgObj.style.top) - 10 + 'px';
// }

// function moveDown(){
//     imgObj.style.top = parseInt(imgObj.style.top) + 10 + 'px';
// }

// Refactored Code

// Not necessary here

// Reflection
// I didn't like this assignment too much because it was very open ended.
// I'm not sure if you wanted our missions to be able to accept JS commands from the user and reflect what they were asking on the page
// Ex. player.moveLeft() would move move the character left. I thought that would be hard but really difficult to implement so I went with buttons
// During this asssignment, I realized how annoying it was to figure out if two objects are located at the same location. There may be a better way to do this
//  but I used the pixels of style.left and style.top which got difficult because I believe they corresponed to the top left corner of each image not the center.
//  Anyway I learned about that and creating various JS functions like mainTest() and moveLeft()