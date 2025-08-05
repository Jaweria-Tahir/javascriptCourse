//What will be the output?

let a = "123";
console.log(typeof a);//string

//Convert the value "456" to a number and print its type.

let value = "456";
let conversion = Number(value);
console.log(typeof conversion);

//check type 
let x = null;
console.log(typeof x);//object

//Convert true and false to numbers. What do you get?
let t = true;
let convert = Number(t);
console.log(convert);

//Convert 0, 1, -1, and 100 to Boolean. What do you observe?
let t1 = 0;
let convert1 = Boolean(t1);
console.log(convert1);

let t2 = 1;
let convert2 = Boolean(t2);
console.log(convert2);

let t3 = -1;
let convert3 = Boolean(t3);
console.log(convert3);

let t4 = 100;
let convert4 = Boolean(t4);
console.log(convert4);

//Convert the string "123abc" to a number and check if it's NaN.

let num = "123abc";
let convert5 = Number(num);
console.log(convert5);

//What will be the output of:

let z = "5";
let y = 2;
console.log(z + y);

//What happens if you do:
let c = "100";
let b = 20;
console.log(c - b);