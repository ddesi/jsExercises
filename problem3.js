// Create an object called Multiplier with two methods: multiply and getCurrentValue. 
// multiply has an argument 'number', and should return the number supplied * the current value. 
// Current value should default to 1 to start. 
// Update current value to the returned value of multiply on each call. 
// getCurrentValue should return the last answer returned from multiply.

function Multiplier(n) {

	var currentNumber = 1

	this.multiply = function(number) {

		currentNumber *= number
       
        return currentNumber
    }
}

var newMultiplier = new Multiplier()

console.log(newMultiplier.multiply(5))

console.log(newMultiplier.multiply(2))

console.log(newMultiplier.multiply(50))