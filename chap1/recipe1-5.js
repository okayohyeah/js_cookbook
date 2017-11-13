//Replacing Patterns with New Strings

var searchString = "Now is the time, this is the tame";
var match = /t\w{2}e/g; //RegEx: '/' start of RegEx, 't' matches a 't' character, '\w' matches any word character (alphanumeric and underscore), {2} matches 2 of the preceding token , 'e' matches a 'e' character, '/' end of a RegEx, 'g' global search

//replace() method will replace matched text with the replacement string 
//replace(searchValue, newValue)
var replacement = searchString.replace(match, "place");
console.log(replacement); // Now is the place, this is the place


//Alternative: using built-in RegExp object
var searchString2 = "Now is the time, this is the tame";
var match2 = new RegExp('t\\w{2}e',"g"); //built-in RegExp Object: no slashes used, aren't necessary when using RegExp, but use of the backslash in the pattern has to be escaped. "g" - global indicator is a second argument and is optional

var replacement2 = searchString2.replace(match2, "place");
console.log(replacement2);



//RegEx Primer
var searchString3 = "technology    book is the best technology book but not technologybook but TechnoLOgy  bOOK";
var match3 = /technology\s+book/ig;  //RegEx: '/' start of RegEx, 'technology' matches 'technology', '\s+' matches a single white space character (\s) one or more times (+), 'book' matches only 'book', '/' end of a RegEx, 'i' case insenstive, 'g' global search

var replacement3 = searchString3.replace(match3, "nothing");
console.log(replacement3);






