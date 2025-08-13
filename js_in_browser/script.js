// // alert("Hello")
// console.log("HEY HOW ARE YOU");
// console.log("Hello");
// let a = 4;
// let b = 2;
// document.write(a+b);


console.log(console);//help in printing the entire console object
console.log("Hi jaweria");//print msg
console.error("This is an error");//print a message as error marking as red
console.assert(5>53);//checking a condition
console.assert(5<53);
// console.clear();//clears the console
const objt={"jiya":10,"ali":8,"saad":9};
console.table(objt);
console.warn("Hey dont cross red line");//shows warning in  browser console
console.info("This is an important note");
console.time("forLoop");//tells about the time taken to run the piece of code
for (let i = 0; i < 5; i++) {
    console.log(233);
    
}
console.timeEnd("forLoop");

console.time("whileLoop");//tells about the time taken to run the piece of code
let i = 0;
while(i<5) {
    console.log(233);
    i++;
}
console.timeEnd("whileLoop");