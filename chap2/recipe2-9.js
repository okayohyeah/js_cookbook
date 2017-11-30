// VALIDATION OF ARRAY CONTENTS

// every() method - checks that EVERY element of an array passes a given criterion
				// the callback function has 3 parameters
				// 						1. current array element - ONLY ONE REQUIRED
				// 						2. array index
				// 						3. the array
				// does NOT change original array
// testing
function testValue (element, index, array) {
	// test against pattern: 
	// RegEx:	   / : start of expression 
						// ^ : matches beginning of string 
						// []: match any character in set
						// 				a-z A-Z
						//  +: match 1 or more 
						//  $: matches end of string 
						//  /: end of expression
	var textExp = /^[a-zA-Z]+$/;
	// test() method tests for match of RegEx pattern every element in array
	return textExp.test(element);
}

var elemSet = ["**", 123, "aaa", "abc", "-", 46, "AAA"];

// run callback function testValue on array elemSet of every element using every() method
var result = elemSet.every(testValue);

console.log(result); // false

// Another array to test
var animals = ["elephant", "lion", "cat", "dog"];

//runs callback function testValue on animals array using every() method
result = animals.every(testValue);
console.log(result); // true


// some() method - checks that ONE or MORE element(s) of an array passes a given criterion
		// if it finds an element where the function returns a true value, it returns true and does NOT check the rest of the elements

var retest = ["**", 123, "aaa", "abc", "-", 46, "AAA"];

// run through test again with callback function testValue using some() method
result = retest.some(testValue);

console.log(result); //true