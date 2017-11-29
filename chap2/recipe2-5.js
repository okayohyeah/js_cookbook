// forEach() method
		// takes 1 argument, the callback function - APPLIED to EACH ELEMENT of ARRAY
				// the callback function has 3 parameters
						// 1. array element - ONLY ONE REQUIRED
						// 2. index of the element
						// 3. the array

var charSets = ["ab", "bb", "cd", "ab", "cc", "ab", "dd", "ab"];

// Callback function replaceElement()
				// the callback function has 3 parameters
						// 1. array element - ONLY ONE REQUIRED
						// 2. index of the element
						// 3. the array
function replaceElement(element, index, array) {
	// test to see if element matches value of "ab"
	if (element == "ab") {
		// the element matched value "ab"
		// the element's index is used to modify the array element's value w/
		// replacment value of "**"
		array[index] = "**";
	}
	//NO value is returned
}

// apply callback function replaceElement() on array charSets is applied to EACH ELEMENT of the array
charSets.forEach(replaceElement);
console.log(charSets); //(8) ["**", "bb", "cd", "**", "cc", "**", "dd", "**"]