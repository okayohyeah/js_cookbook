// map() method applies callback function to each array element
	// takes 1 argument
				// the callback function has 3 parameters
						// 1. current array element - ONLY ONE REQUIRED
						// 2. array index
						// 3. the array

	// results in a new array and doesn't modify original array
	// MUST return a value


var decArray = [23, 255, 122, 5, 16, 99];

// map() method applied callback function to decArray
		// callback function has 1st parameter, the current array element
var hexArray = decArray.map(function(element) {
	// number.toString(radix)  
			// radix parameter is OPTIONAL in toString() method
			// 2 - The number will show as a binary value
			// 8 - The number will show as an octal value
			// 16 - The number will show as an hexadecimal value
	return element.toString(16);
});

console.log(hexArray); 	// (6) ["17", "ff", "7a", "5", "10", "63"]


var old = [1, 2, 3, 4, 5];
var add2 = old.map(function(element) {
	return element + 2;
});

console.log(add2);
