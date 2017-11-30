// DECONSTRUCTING ASSIGNMENT
			// Allows for deconstructing of arrays and objects using syntax that mirrors array and object initialisers.
						// If number of variables are less than the array elements, they are assigned the element values up until the variables have been assigned.
						// If there are more variables than array elements, the unmatched variables are created, but they are set to undefined.

var stateValues = [459, 144, 96, 34, 0, 14];

// assign variables to array elements
		// Variables are declared and instantiated with values in the array stateValues
			// starting with the array index at position 0
var [Arizona, Missouri, Idaho, Nebraska, Texas, Minnesota] = stateValues;

console.log(Missouri); // 144


// LESS VARIABLES THAN ELEMENTS
var heightValues = [60, 54, 41, 72];
// less variables than heightValue elements
var [John, Sarah, Mike] = heightValues;
console.log(Mike); // 41


// MORE VARIABLES THAN ELEMENTS
var heightValues2 = [60, 54, 41, 72];
// more variables than heightValue elements
var [Boo, Charlie, Stan, Jin, Miley, Aaron] = heightValues2;
console.log(Miley); // undefined
console.log(Aaron); // undefined