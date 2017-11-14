// parent array
var fruitarray = [];
// multi-dimensional arrays
fruitarray[0] = ['strawberry', 'orange'];
fruitarray[1] = ['lime', 'peach', 'banana'];
fruitarray[2] = ['tangerine', 'apricot'];
fruitarray[3] = ['raspberry', 'kiwi'];

// flatten array
// Array object concat() method takes one or more arrays and appends the array elements on to the end of the contents of the parent array on which the method was called.
var newArray = fruitarray.concat.apply([], fruitarray);
console.log(newArray[5]); // tangerine
