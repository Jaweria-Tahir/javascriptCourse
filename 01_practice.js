// Declare a constant for your college name and print it.
const collegeName = "Comsats university Lahore"
console.log(collegeName);
// Declare two variables using let: your first name and last name. Print full name.
let firstName = "Jaweria"
let lastName = "Tahir"
console.log(firstName);
console.log(lastName);
//   Create a variable for your age, then update it (simulate a birthday).
let age = 21
console.log("Before birthday:"+ age);
age = age + 1;
console.log("After birthday:"+ age);
//Try reassigning a const variable and see what error appears.
// collegeName = "BU"
// console.log(collegeName);

//Declare a variable isStudent and set it to true. Print a sentence using it
let isStudent = true;
console.log("Are you a student?" + isStudent);

// Declare let x = 5, let y = 10, then swap their values.
let x = 5;
let y = 10;
let temp = x;
x = y;
y = temp;
console.log("x:",x ," y:",y);

 //Declare a variable num, assign it a value. Use console.log(typeof num) to check its type.
 let num = 13;
 console.log(typeof num);
  let num2 = "jiya";
 console.log(typeof num2);

  // Declare a variable without initializing, then assign value later. Print both stages.
  let marks;
  console.log("before:"+marks);
  marks = 13;
  console.log("after:"+marks);
  
   //✅ Q9: Use template literals to print:
   let myName = "Jaweria";
   let myAge = 21;
console.log(`My name is ${myName} .My age is ${myAge}`);
   