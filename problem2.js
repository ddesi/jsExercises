// Write a method that lists the properties of a JavaScript object. (Hint: loops!)

// The for...in statement iterates over the enumerable properties of an object,
//  in arbitrary order. For each distinct property, statements can be executed.

// for (variable in object) {...
// }

// variable: A different property name is assigned to variable on each iteration.
// object: Object whose enumerable properties are iterated.

// var value = {
// 	awesome:"cats", 
// 	cool:"duh", 
// 	ffff:"sleep"
// }

// for (var key in value) {
// 	console.log("this is " + key + " because " + value[key])
// }

function Plane(model, company) {
	this.model = model
	this.company = company
}

function printObject(object){
	for(var attribute in object) {
		if(object.hasOwnProperty(attribute)){
			console.log(attribute + " = " + object[attribute])
		}
	}
}

plane = new Plane("A380", "Emirates")
printObject(plane)



