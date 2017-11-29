// REMOVE or REPLACE ALL Instances of a particular element.

// Array charSets with several elements w/multiple instances of a specific value
var charSets = ["ab", "bb", "cd", "ab", "cc", "ab", "dd", "ab"];

// REPLACE element
// while there is/are "ab" element(s)
while (charSets.indexOf("ab") != -1) {
		// splice() method to REPLACE all of elements w/a given value "ab"
				// 1. charSets.indexOf("ab") is index where splicing is to take place
						// starts at index 0, then 3, 5, 7
				// 2. number of elements to remove = 1
						// removes 1 element of "ab" at a time during while loop
				// 3. set of the replacement element = "**"
						// replaces 1 element of "**" at a time during while loop
   charSets.splice(charSets.indexOf("ab"), 1, "**");
};
console.log(charSets); // (8) ["**", "bb", "cd", "**", "cc", "**", "dd", "**"]

// REMOVE new element
// while there is/are "**" element(s)
while(charSets.indexOf("**") != -1) {
	// splice() method to REPLACE all of elements w/a given value "ab"
			// 1. charSets.indexOf("**") is index where splicing is to take place
					// starts at index 0, then 3, 5, 7
			// 2. number of elements to remove = 1
					// removes 1 element of "**" at a time during while loop
  charSets.splice(charSets.indexOf("**"), 1);
};
console.log(charSets); // ["bb", "cd", "cc", "dd"]

