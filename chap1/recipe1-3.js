//STRICT EQUALITY OPERATORS

// succeeds if string with length greater than zero
var strVariable = null;
//tests for nonempty string: 
if ((typeof strVariable == "string") && (strVariable.length > 0)) {
   console.log('string');
} else {
   console.log('not a string');
}  //not a string

strVariable.length; //cannot read property 'length' of null
typeof strVariable; //object




var strVariable = "this is the best string";
// succeeds if string with length greater than zero
if ((typeof strVariable == "string") && (strVariable.length > 0)) {
   console.log('string');
} else {
   console.log('not a string');
} //string

strVariable.length; //23
typeof strVariable; //string




//String object instance
var strVariable = new String('test');
// good, nonempty string primitive
if ((strVariable != null && strVariable.length > 0) &&
     typeof strVariable.valueOf() == 'string') {
  console.log('good');
} else {
  console.log('bad');
} //good

strVariable.length; //4
typeof strVariable; //object;
strVariable.valueOf(); //'test'
typeof strVariable.valueOf(); //string
    



//Testing for string, regardless of whether it's a String object or a string literal
if ((strVariable != undefined && strVariable) && strVariable.length > 0 &&
     typeof strVariable.valueOf() == 'string') {
  console.log('good');
} else {
  console.log('bad');
} 

//Test with string literal
var strVariable = "this is the best string"; //good
//Test with String object instance
var strVariable = new String('test'); //good
//Test with null
var strVariable = null; //bad




//Array
var unk = ['a','b']; 
// bad, array
if (((typeof unk != 'undefined' && unk) && unk.length > 0) &&
     typeof unk.valueOf() == 'string') {
  console.log('good');
} else {
  console.log('bad');
} //bad

typeof unk; //object
unk.length; //2
unk.valueOf(); //(2) ['a', 'b']
typeof unk.valueOf(); //object

//Convert the above array unk into a string
var unk2 = unk.toString(); //converts array into a string: "a,b"
if (((typeof unk2 != 'undefined' && unk2) && unk2.length > 0) &&
     typeof unk.valueOf() == 'string') {
  console.log('good');
} else {
  console.log('bad');
} //good

typeof unk2; //string
unk2.length; //3   ----a,b
unk2.valueOf(); //a,b
typeof unk2.valueOf(); //string 


// bad, null
var a = null;
if (((typeof a != 'undefined' && a) && a.length > 0) &&
     typeof a.valueOf() == 'string') {
  console.log('good');
} else {
  console.log('bad');
} //bad

typeof a; //object
a.valueOf(); //cannot read property valueOf of null



//Convert above variable from null to a string
var b = 'this is better';
if (((typeof b != 'undefined' && b) && b.length > 0) &&
     typeof b.valueOf() == 'string') {
  console.log('good');
} else {
  console.log('bad');
} //good

typeof b; //string
b.length; //14
b.valueOf(); //this is better
typeof b.valueOf(); //string



//Loose and Strict Equality Operators
var str1 = new String('test');
if (str1 == 'test') {  //Loose Equality Operator
  console.log('good');
} else {
  console.log('bad');
} //good because the primitive value the str1 variable contains and string literal 'test' are identical


var str1 = new String('test');
if (str1 === 'test') { //Strict Equality Operator
  console.log('good');
} else {
  console.log('bad');
} //bad because str1, an object, is not equal to 'test', a string literal are not equivalent

var num = 0;
var str = '0';
console.log(num == str); //true - when a string is compared to a number, the loose equality comparison is treated as
//console.log(num === toNumber(str));
console.log(num === str); //false