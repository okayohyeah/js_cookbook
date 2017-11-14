// Searching Through an Array

// no array data type in JS but there are JS Array objects
var animals = ["dog", "cat", "seal", "elephant", "walrus", "elephant", "lion", "cat"];

//Array method indexOf() takes in a search value and returns the first one found.****If found within array, returns an index number represening the array element. If the value is NOT found, -1 is returned.
console.log(animals.indexOf("elephant")); //  3

//Array method lastIndexOf() takes in a search value and returns the last one found.****If found within array, returns an index number represening the array element. If the value is NOT found, -1 is returned.
console.log(animals.lastIndexOf("cat")); // 7


var cars = ["element", "camry", "escort", "sonata", "camry", "corolla"];

// indexOf(value, starting index)
//find value "camry", start search at index 2 and find index of first one
console.log(cars.indexOf("camry", 2));  // 4

// lastIndexOf(value, starting index)
//find value "camry", start search at index 2 and find index of last one
console.log(cars.lastIndexOf("camry", 5));  // 4




// Array method findIndex()
var nums = [2, 4, 19, 15, 183, 6, 7, 1, 1];

// findIndex() method, providing a function that tests each array value, and returns the index of the array element when the test is successful
var over = nums.findIndex(function (element) {
return (element >= 100);
});

console.log(over);  // 4

console.log(nums[over]);  // 183

