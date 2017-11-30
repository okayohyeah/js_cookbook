// ASSOCIATIVE ARRAYS/HASHES

// Associative array elemArray to store elements
var elemArray = new Object(); // Create an OBJECT rather than an array
var elem = document.forms[0].elements[0];
elemArray[elem.id] = elem.value;

// Iterate over the array using a combination of keys() and forEach() methods
Object.keys(elemArray).forEach(function(key) {
	var value = elemArray[key];
	console.log(value);
});


// With Associative Arrays, the array index is a string representing a keyword (STRING KEYS), mapping the string to a given value.
// Associative arrays have named indexes rather than numeric indexes like normal arrays, but JavaScript doesn't support arrays with named indexes

// associateArray["key"] = value

// An associative array is simply a set of key value pairs.

// When you use STRING KEYS, you cannot refer to the value using ordinal position
array={'apple1': "pie",
				'apple2': "sauce"};
array[0]; // ARRAY SYNTAX - undefined - CANNOT refer to 'apple1' as 0
array.0; // OBJECT SYNTAX - ERROR - unexpected number
array['apple1']; // "pie" - ARRAY SYNTAX - and used key 'apple1'
array.apple1; // "pie" - OBJECT SYNTAX - and used key 'apple1'

// when you use NUMERIC KEYS in associate arrays, it is treated as a STRING KEY OR NUMERIC KEY as long as you use ARRAY SYNTAX
array={0: "baby", 1: "mom", 2: "dad"};
array[0]; // ARRAY SYNTAX - key as NUMBER - returns "baby"
array["0"]; // ARRAY SYNTAX - key as STRING - returns "baby"
array.0   // OBJECT ARRAY - ERROR - unexpected number

// FURTHER READING: http://www.i-programmer.info/programming/javascript/1441-javascript-data-structures-the-associative-array.html?start=1