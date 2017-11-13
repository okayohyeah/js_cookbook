var sentence = 'This is one sentence. This is a sentence with a list of items:' + 
'cherries, oranges, apples, bananas. That was the list of items.';
console.log(sentence); 
//This is one sentence. This is a sentence with a list of items:cherries, oranges, apples, bananas. That was the list of items.


//indexOf() method takes the search value of the first parameter (with optional beginning index position, as second parameter)
var start = sentence.indexOf(':'); //String indexOf() to locate the colon 
console.log(start); //61

var end = sentence.indexOf('.', start+1); //Searching for period: String indexOf() to locate the second period, after the colon. The colon's position (61) plus 1 is used to modify the beginning location of the search (62) for the period. 
console.log(end); //96



//substring() method takes two index values representing the beginning and ending position of the string
var listStr = sentence.substring(start+1, end); //Locate the list: String substring() to extract using the beginning position (start+1=62) and ending position (96)
console.log(listStr); //cherries, oranges, apples, bananas



//split() method used to split a string into an array of substrings and returns the new array.  
var fruits = listStr.split(','); //String split() to break the string into an array - split the string at each point at the separator, in this case we specified the separator as ',' 
console.log(fruits); // ['cherries', ' oranges', ' apples', ' bananas']



//OPTION 2 string extraction method
//substring() method takes two index values representing the beginning and ending position of the string
var listStr = sentence.substring(start+1, end); //Locate the list: String substring() to extract using the beginning position (start+1=62) and ending position (96)
console.log(listStr); //cherries, oranges, apples, bananas

//substr() method takes two index values. The first index position marks the start of the substring and passing in the length of the substring as the second parameter.
var listStr2 = sentence.substr(start+1, end-start); //first index position 62: start of the substring
																										//second index position 35: length of substring
console.log(listStr2); //cherries, oranges, apples, bananas
console.log(start+1); //62
console.log(end-start); //35

//split() method used to split a string into an array of substrings and returns the new array.  
var fruits = listStr2.split(','); //String split() to break the string into an array - split the string at each point at the separator, in this case we specified the separator as ',' 
console.log(fruits); // ['cherries', ' oranges', ' apples', ' bananas']



