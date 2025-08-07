//includes
let s = "Hi my name is Hamna";
let word = "is";
console.log(s.includes(word) );

//stratsWith
console.log(s.startsWith("m"));

//endsWith
console.log(word.endsWith("s"));

//lowercase
let sentence = "I am daughter of Tahir";
console.log(sentence.toLowerCase());5

//Extract amount out of string
let sentence1 = "Please give Rs 1000";
console.log(sentence1.slice("Please give ".length));
let amt = sentence1.slice("Please give Rs ".length);
//connvert amount in number
console.log(amt);

console.log(typeof amt );
let convertAmt = Number.parseInt(amt);
console.log(typeof convertAmt);

//try to change fourth character of a string were you able to do it
let str = "My class is here."
str[1] = "p";
console.log(str);
//NO CHANGE! COZ STRINGS ARE IMMUTABLE
