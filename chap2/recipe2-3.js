// REMOVE or REPLACE ARRAY ELEMENTS

var animals = new Array("dog", "cat", "seal", "walrus", "lion", "cat");

// REMOVE or SPLICE the element from array
	// splice() method takes 3 parameters. 
		// 1st paramater(required)= index where splicing takes place. 
				// if index is negative, elements will be spliced from the end rather than the beginning
		// 2nd paramter(optional)=is the number of elements to remove. 
		// 3rd paramter(optional)=a set of replacement elements (if elements, separate by commas)
			// splice at walrus and remove 1 element
animals.splice(animals.indexOf("walrus"),1);
console.log(animals); // (5) ["dog", "cat", "seal", "lion", "cat"]

// REPLACE or splice in new element
	// splice() method takes 3 parameters.3rd paramter(optional)=a set of replacement elements
		//splice at last index of cat, remove 1 element, replace with "monkey"
animals.splice(animals.lastIndexOf("cat"),1,"monkey");
console.log(animals); // (5) ["dog", "cat", "seal", "lion", "monkey"]

console.log(animals.toString()); // dog,cat,seal,lion,monkey



var animals2 = ["cat", "walrus", "lion", "cat"];

	//splice at end, remove 1 element, replace with "monkey"
animals2.splice(-1, 1, "monkey");
console.log(animals2); // (4) ["cat", "walrus", "lion", "monkey"]

// IF second parameter (number of elements to remove) is NOT PROVIDED, all elements from index to end are removed
animals2.splice(2);
console.log(animals2); // (2) ["cat", "walrus"]


var animals3 = ["cat", "walrus", "lion", "cat"];

	//splice at index 2, remove 1 element, replace with "zebra", "elephant"
animals3.splice(2, 1, "zebra", "elephant");
console.log(animals3); // (5) ["cat", "walrus", "zebra", "elephant", "cat"]
