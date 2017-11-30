// EXTRACTING a PORTION of an ARRAY
// BUT keep the original array intact IF array element is a Primitive Data Type rather than an array object
		// the elements are copied by value and CHANGES to NEW array won't be reflected in the OLD array
		// SLICE() METHOD
				// slice() method extracts a SHALLOW COPY of a portion of an existing array
				// and returns a new array
						// MODIFICATIONS are reflected in ORIGINAL and SHALLOW COPY 
						   // IF ELEMENTS are ARRAY OBJECTS

var animals = ["elephants", "tiger", "lion", "zebra", "cat", "dog", "rabbit", "goose"];

// slice() method used on "animals" array and extracts out a portion into shallow copy "domestic" array
var domestic = animals.slice(4, 7);

console.log(domestic);	// (3) ["cat", "dog", "rabbit"]

domestic[1] = "bird";
console.log(dometic);	// (3) ["cat", "bird", "rabbit"]
console.log(animals); // (8) ["elephants", "tiger", "lion", "zebra", "cat", "dog", "rabbit", "goose"]



// MODIFICATIONS are reflected in ORIGINAL and SHALLOW COPY IF ELEMENTS are ARRAY OBJECTS
// EXAMPLE:
// Array of an array object of elements
var original = [];
original[0] = ["apple", "pear"];
original[1] = ["strawberry", "lemon"];
original[2] = ["lime", "peach", "berry"];

console.log(original); // (3) [Array(2), Array(2), Array(3)]
															// 0: (2) ["apple", "pear"]
															// 1: (2) ["strawberry", "lemon"]
															// 2: (3) ["lime", "peach", "berry"]

// slice() method is used on "original" array and extracts out a portion into a "shallow" copy array
var shallow = original.slice(1, 2);
console.log(original[1]);  // (2) ["strawberry", "lemon"]
																	// 0: "strawberry"
																	// 1: "lemon"

console.log(shallow);		// [Array(2)]
														// 0: (2) ["strawberry", "lemon"]

shallow[0][0]; // "strawberry" - first object, first element
shallow[0][0] = "raspberry"; // reassign first object, first element to "rasberry"

// modification of reassignment of first object, first element reflected in "shallow" copy array
console.log(shallow[0]); // first object: whole array
														// (2) ["raspberry", "lemon"] 
// modification of reassignment of first object, first element reflected in "original" array as well
console.log(original[1]); // first object: whole array
														 // (2) ["raspberry", "lemon"]



