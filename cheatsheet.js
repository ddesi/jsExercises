// Create an OO JavaScript "cheat sheet" that includes:
// 	Creating objects using
//  object literal
//  constructor function
//  	Creating instances of objects
// 	accessing object attributes and methods
// 	prototypical objects

// The file should have comments (denoted with a //) to explain each piece of code.

// -------------------------------------------------------------------------------------------

// CREATING AN OBJECT

// There are different ways to create new objects:

// 1. Define and create a single object, using an object literal

var person = {firstName:"Idris", lastName:"Elba", age:44, eyeColor:"brown"};

var another_person = {
    firstName:"Charlie",
    lastName:"Chaplin",
    age:"idk",
    eyeColor:"black"
};


// 2. Define and create a single object, with the keyword new

var a_woman = new Object();
a_woman.firstName = "Majora";
a_woman.lastName = "Carter";
a_woman.eyeColor = "brown";

// You can define a constructor function and then create an object by using the new keyword:

function Car (desc) {
	this.desc = desc;
    this.color = "red";
    this.getInfo = function getInfo() {
    	return 'A ' + this.color + ' ' + this.desc + '.'
    }
}


// 3. Define an object constructor, and then create objects of the constructed type

function artist(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.country = country;
    this.movement = movement;
}
var crazyArtist = new artist("Edvard", "Munch", "Norway", "Expressionism");
var anotherArtist = new artist("Frida", "Kahlo", "Mexico", "Surrealism");


// The this Keyword
// In JavaScript, the thing called this, is the object that "owns" the JavaScript code.
// The value of this, when used in a function, is the object that "owns" the function.
// The value of this, when used in an object, is the object itself.
// The this keyword in an object constructor does not have a value. It is only a substitute for the new object.
// The value of this will become the new object when the constructor is used to create an object.
// this is not a variable. It is a keyword. You cannot change the value of this.

 
//instantiate object using the constructor function

var plane = new plane("A380")
plane.company = "Emirates"
console.log(plane.getInfo())

// A variation on the above theme is to create a constructor function,
// but to append methods to the Object prototype.
// That shares the method across objects:

function Plane (desc) {
    this.desc = desc
    this.amenities = "shower Spas"
}
 
Plane.prototype.getInfo = function() {
    return "Cool" + this.amenities + " and also " + this.desc
}

// A more sophisticated use of the prototype property is to set it
// in one fell swoop using either a function or an object literal:

function Plane (desc) {
    this.desc = desc;
    this.amenities = "flat-bed seats";
}
 
Plane.prototype = {
    getInfo: function() {
      return "Cool " + this.amenities + " and also " + this.desc
    },
    takeOff: function() {
      //DO SOMETHING
    },
    sound: function() {
      //DO SOMETHING
    }
}


// Objects can also be created using the Object.create() method. 
// This method can be very useful, because it allows you to choose the prototype object 
// for the object you want to create, without having to define a constructor function.

// Animal properties and method encapsulation
var Animal = {
  type: "Invertebrates", // Default value of properties
  displayType : function(){  // Method which will display type of Animal
    console.log(this.type);
  }
}

// Create new animal type called animal1 
var animal1 = Object.create(Animal);
animal1.displayType(); // Output:Invertebrates

// Create new animal type called Fishes
var fish = Object.create(Animal);
fish.type = "Fishes";
fish.displayType(); // Output:Fishes


// The Object.create() method can just as adeptly create our Car object. 
// It accepts either one or two properties as follows:
// The first argument is the prototype to extend. If you aren't subclassing another object then you must pass a null value to the function. The second optional argument is an object containing the object's property descriptors. More on those in a bit.
// We already have a Plane prototype, so it makes sense to pass it to Object.create(). 

function Plane (desc) {
    this.desc = desc;
    this.amenities = "showers";
}
 
Car.prototype = {
    getInfo: function() {
      return 'A ' + this.amenities + ' ' + this.desc + '.';
    }
};
//instantiate object using the constructor function
var Plane =  Object.create(Plane.prototype);
car.amenities = "SPA";
alert(Plane.getInfo()); //displays 'undefined.' ??!

// The description is lost. 
// So why is that? Simple; the create() method only uses the prototype and not the constructor. 
// Hence, Object.create() is an excellent choice for creating an object 
// without going through its constructor. 
// How to assign the description: supply it via the second parameter.

var Plane2 = Object.create(null); //this is an empty object, like {}
Plane2.prototype = {
  getInfo: function() {
    return 'A ' + this.amenities + ' ' + this.desc + '.';
  }
};
 
var Plane2 = Object.create(Plane2.prototype, {
  //value properties
  amenities:   { writable: true,  configurable:true, value: "showers" },
  //concrete desc value
  rawDesc: { writable: false, configurable:true, value: "" },
  // data properties (assigned using getters and setters)
  desc: { 
    configurable:true, 
    get: function ()      { return this.rawDesc.toUpperCase();  },
    set: function (value) { this.rawDesc = value.toLowerCase(); }  
  }
}); 
Plane2.amenities = "silk sheets probably";
console.log(Plane2.getInfo());


// Accessing Object Properties
// objectName.propertyName
// objectName["propertyName"]

var guy = {
    name: "jack",
    location : "LDN",
    id       :  5566
};

guy.location
guy["name"]

// Accessing Object Methods
// objectName.methodName()

var gal = {
    name: "anne",
    location : "LAX",
    desc = function(){
    	return this.name + " is from " + "this.location";
    }
};

gal.desc();


// INHERITANCE
// All objects in JavaScript inherit from at least one other object. 
// The object being inherited from is known as the prototype, 
// and the inherited properties can be found in the prototype object of the constructor.


// PROTOTYPICAL OBJECTS
// Every JavaScript object has a prototype. The prototype is also an object.
// All JavaScript objects inherit their properties and methods from their prototype.

// To add a new property to a constructor, you must add it to the constructor function:

function person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.nationality = "English";
}

var myFather = new person("John", "Doe", 50, "blue");
var myMother = new person("Sally", "Rally", 48, "green");

Your constructor function can also define methods:


// Your constructor function can also define methods:

function person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.name = function() {
        return this.firstName + " " + this.lastName
    };
}



function person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}
person.prototype.nationality = "English";

var myFather = new person("John", "Doe", 50, "blue");


function person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}
person.prototype.name = function() {
    return this.firstName + " " + this.lastName
};

var myFather = new person("John", "Doe", 50, "blue");































