"use strict";

let name = "jiya"//string
let age = 21//number
let isLogged = false//boolean
let state = null//null

//nnssbbu
//number
//bigint
//string
//boolean
//null(stand alone value)
//undefined(no value assigned)
//symbol(unique)

// //object

// console.log(typeof "jiya");
// console.log(typeof age);
// console.log(typeof null);//object
// console.log(typeof undefined);//undefined

let a = null;
let b = 345;
let c = true;
let d = BigInt("567")+BigInt("3");
let e = "jiya";
let f = Symbol("I am a nice symbol");
let g = undefined;
console.log(a,b,c,d,e,f,g);
console.log(typeof d);

//objects(non-primitive datatype)
const item ={
    "jiya":true,
    "ali":false,
    "saad":67,
    "ahmad":undefined
}
console.log(item["alif"]);
