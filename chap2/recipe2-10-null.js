// DICT PATTERN
// Instead of creating a standard object, create one that has a null prototype

var newMap = {};

var key = 'toString';

console.log(key in newMap); // true
console.log(newMap[key]); // ƒ toString() { [native code] }
		// toString() is a standard Object method

var secondMap = Object.create(null);
console.log(key in secondMap); // false

secondMap[key] = "something diff";
console.log(key in secondMap); // true
console.log(secondMap[key]); // something diff

// READING: http://2ality.com/2013/10/dict-pattern.html