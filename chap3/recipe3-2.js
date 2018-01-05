//3.2 Passing a Function As an Argument to Another Function
var reverseArray = function(x,indx,str) {
  return indx == 0 ? str : 
                 reverseArray(x,--indx,(str+= " " + x[indx]));
}

var arr = ['apple','orange','peach','lime'];
var str = reverseArray(arr,arr.length,""); 
	// reverseArray(['apple','orange','peach','lime'], 4, "")
	// indx=4 -> reverseArray(['apple','orange','peach','lime'], --indx = 3, arr[3]= lime)
	// indx=3 ->  							 																--indx = 2, arr[2]= peach
	// indx=2 ->  							 																--indx = 1, arr[2]= orange
	// indx=1 ->  							 																--indx = 0, arr[2]= apple
	// indx=0 -> str = " lime peach orange apple	"																				
console.log(str); // lime peach orange apple

var arr2 = ['car','boat','sun','computer'];
str = reverseArray(arr2,arr2.length,"");
	// reverseArray(['car','boat','sun','computer'], 4, "")
	// indx=4 -> reverseArray(['car','boat','sun','computer'], --indx = 3, arr[3]= computer)
	// indx=3 ->																							--indx = 2, arr[2]= sun
	// indx=2 ->																							--indx = 1, arr[2]= boat
	// indx=1 ->																							--indx = 2, arr[2]= car
	// indx=0 -> str = " computer sun boat car"
console.log(str); // computuer sun boat car
