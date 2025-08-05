// Identify the Data Type

console.log(typeof 42);//number
console.log(typeof "hello");//string
console.log(typeof true);//boolean
console.log(typeof undefined);//undefined
console.log(typeof null); // Why is this one strange?//its object.its a historical mistake.its a bug in javascript.

// Declare one variable for each primitive type
let age = 12;          // Number
let name = "jaweria";         // String
let isOnline = true;     // Boolean
let score ;        // Undefined
let data = null;         // Null

console.log(typeof age);
console.log(typeof name);
console.log(typeof isOnline);
console.log(typeof score);
console.log(typeof data);

//difference
let a = "10";
let b = 10;

console.log(a == b);   // loose equality//true
console.log(a === b);  // strict equality//false