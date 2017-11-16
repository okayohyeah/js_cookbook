// parent array
var fruitarray = [];
// multi-dimensional arrays
fruitarray[0] = ['strawberry', 'orange'];
fruitarray[1] = ['lime', 'peach', 'banana'];
fruitarray[2] = ['tangerine', 'apricot'];
fruitarray[3] = ['raspberry', 'kiwi'];

console.log(fruitarray); // (4) [Array(2), Array(3), Array(2), Array(2)]


// Flatten array

//***Array object concat() method takes one or more arrays and appends the array elements on to the end of the contents of the parent array on which the method was called.
//***Apply () method allows us to apply the concat () function being called, given the array of arguments (in this case the original multi-dimensional array).
//***An empty array [] is passed as the first paramater to apply() because concat() works by concatenating the arrays onto an existing array.
//***If we used the first element of the array (fruitarray[0]), its values will be repeated in the final results
var newArray = fruitarray.concat.apply([], fruitarray);

console.log(newArray); // (9) ["strawberry", "orange", "lime", "peach", "banana", "tangerine", "apricot", "raspberry", "kiwi"]

console.log(newArray[5]); // tangerine

// Alternative: Flatten Array
var newArray2 = fruitarray[0].concat(fruitarray[1], fruitarray[2], fruitarray[3]);

console.log(newArray2); // (9) ["strawberry", "orange", "lime", "peach", "banana", "tangerine", "apricot", "raspberry", "kiwi"]

