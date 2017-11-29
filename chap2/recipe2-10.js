// ASSOCIATIVE ARRAYS/HASHES

// Associate array elemArray to store elements
var elemArray = new Object(); // Create an OBJECT rather than an array
var elem = document.forms[0].elements[0];
elemArray[elem.id] = elem.value;

// Iterate over the array using a combination of keys() and forEach() methods
Object.keys(elemArray).forEach(function(key) {
	var value = elemArray[key];
	console.log(value);
});


// With Associate Arrays, the array index is a string representing a keyword, mapping the string to a given value.
// Associative arrays have named indexes rather than numeric indexes like normal arrays, but JavaScript doesn't support arrays with named indexes

// associateArray["key"] = value

// An associative array is simply a set of key value pairs.