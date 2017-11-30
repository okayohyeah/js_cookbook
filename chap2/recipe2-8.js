// filter() method applies callback function to each array element
// parameter passed returns either true or false based on some test against the array elements
// elements are returned into a new array
				// the callback function has 3 parameters
						// 1. current array element - ONLY ONE REQUIRED
						// 2. array index
						// 3. the array
//does NOT change original array


var charSet = ["**", "bb", "cd", "**", "cc", "**", "dd", "**"];

//	filter() method applies callback function 
var newArray = charSet.filter(function(element) {
	// returns either true or false against this test
	return (element !== "**"); // filter: returns those that elements that are NOT "**" into a new array newArray
});

console.log(newArray); // (4) ["bb", "cd", "cc", "dd"]

// check that old array charSet is unchanged
console.log(charSet); // (8) ["**", "bb", "cd", "**", "cc", "**", "dd", "**"]