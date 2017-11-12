//create primitive string, number, boolean variables by using literal representation
var str = "this is a simple string"; //quoted string is the literal
var num = 1.45;	//value of 1.45 is the literal
var bool = true; //value of true is a boolean literal 

if (str === "string") {
  console.log('equal');
} //equal

if (num === 1.45) {
  console.log('equal');
} //equal

if (bool === true) {
  console.log('equal');
} //equal

//create primitive string, number, boolean variables by using the object without the new operator
var str1 = String("string");  //primitive string 
var num1 = Number(1.45); //primitive number 
var bool1 = Boolean(true); //primitive boolean operator

//when we compare primitive variables to literal values using strct equality, they are equal because primitives are compared by value, and the values are literals
if (str1 === "string") {
  console.log('equal');
} //equal

if (num1 === 1.45) {
  console.log('equal');
} //equal

if (bool1 === true) {
  console.log('equal');
} //equal

//deliberately instantiate an object using the new operator
var str2 = new String("string"); //String object instance
var num2 = new Number(1.45); //Number object instance
var bool2 = new Boolean(true); //Boolean object instance

//when we compare objecct instances to a literal values using strict equality, they are not equal because object instances are compared by value, and the values are not literals, they are objects
if (str2 === "string") {
  console.log('equal');
} else {
  console.log('not equal');
} //not equal

if (num2 === 1.45) {
  console.log('equal');
} else {
  console.log('not equal');
} //not equal

if (bool2 === true) {
  console.log('equal');
} else { 
  console.log('not equal');
} //not equal

