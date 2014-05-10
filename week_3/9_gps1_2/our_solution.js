// GPS 1.2 - JavaScript

// YOUR FULL NAMES:
//  1. Rootul Patel
//  2. Fahia Mohamed 


// 0. "YOU SIGNED... WHO?!"
var angelinaJolie = { 
    name: "Angelina Jolie",
    age:47,
    quote:"Hello"
};


// 1. "Here they Come!"
var adamSandler = { 
    name: "Adam Sandler",
    age: 47,
    quote:"That's your home! Are you too good for your home?"
};

var kristenBell = {
    name: "Kristen Bell",
    age: 33,
    quote: "Do you wanna build a snowman?"
};

var jimCarrey = {
    name: "Jim Carrey",
    age: 52,
    quote: "...So you're telling me there's a chance? YEAH!"
};


// 2. "TIME IS MONEY!"

//YOUR CODE HERE!

function Client(name,age,quote) { 
    this.name = name;
    this.age = age;
    this.quote = quote;
    this.showQuote = function() {
      console.log(this.quote)
    };
};

var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");
shooterMcGavin.constructor === Client;
shooterMcGavin.age === 48;
shooterMcGavin.quote === "Just stay out of my way... or you'll pay. Listen to what I say.";





// 3. "SHOW 'EM OFF!"

var client = [angelinaJolie, adamSandler, kristenBell];
client.push(jimCarrey);

// console.log(client)


//////

client.forEach(function(entry) {
    console.log("Name: "+entry.name+" \n" + 
              "Age: "+entry.age+" \n" + 
              "Quote: "+entry.quote+" \n");
});

//////

// 4.  "But wait, there's more!"

adamSandler.showQuote = function() {
    console.log(this.quote)
    };
    
adamSandler.showQuote();

// ** BONUS **

angelinaJolie.show


function Employee(name,jobtitle,born){
this.name=name;
this.jobtitle=jobtitle;
this.born=born;
}

var rootulPatel=new Client("Rootul Patel",19,"Hello");
Client.prototype.showQuote = function() {
    console.log(this.quote)
};

shooterMcGavin.showQuote();

//  Your Reflection:
/*
I really liked this GPS. At times I was stumped but Fahia and Andrew really helped me solidify some basic concepts regarding JS objects, functions, and 
prototypes. At times the GPS got tedious (repeatedly typing values for jimCarey and adamSandler) but it was very useful.
*/