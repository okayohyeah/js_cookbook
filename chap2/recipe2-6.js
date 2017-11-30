// querySelectorAll() method returns all elements in document that match a specified CSS selector
		// results of querySelectorAll() method is a NodeList object
				// NodeList object is DIFFERENT than an Array object 
		
		// CSS selectors are strings, use " "
				// for multiple selectors, separate each with a comma

// querySelectorAll() method SYNTAX:
			// document.querySelectorAll("CSS selectors", "CSS selectors")


// use querySelectorAll to find all second table cells
var cells = document.querySelectorAll("td + td");
		// results are NodeList objects (NOT Array objects)

// use forEach method on an EMPTY ARRAY
// use call() method on object to emulate the effect of an Array method on the NodeList as if it were an actual array
[].forEach.call(cells, function(cell) {
	sum+= parseFloat(cell.firstChild.data);
});