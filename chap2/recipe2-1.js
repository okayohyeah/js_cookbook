// Searching Through an Array

// no array data type in JS but there are JS Array objects
var animals = new Array("dog","cat","seal","elephant","walrus","elephant","lion","cat");

//Array method indexOf() takes in a search value and returns the first one found. 
		//If found within array, returns an index number represening the array element. If the value is NOT found, -1 is returned.
console.log(animals.indexOf("elephant")); //  3
//Array method lastIndexOf() takes in a search value and returns the last one found. 
		//If found within array, returns an index number represening the array element. If the value is NOT found, -1 is returned.
console.log(animals.lastIndexOf("cat")); // 7

