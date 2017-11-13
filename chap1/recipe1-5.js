var searchString = "Now is the time, this is the tame";

var match = /t\w{2}e/g; //RegEx: '/' start of RegEx, 't' matches a 't' character, '\w' matches any word character (alphanumeric and underscore), {2} matches 2 of the preceding token , 'e' matches a 'e' character, '/' end of a RegEx, 'g' global search

//replace() method will replace matched text with the replacement string - replace(searchValue, newValue)
var replacement = searchString.replace(match, "place");
console.log(replacement); // Now is the place, this is the place

