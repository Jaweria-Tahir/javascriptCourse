//function
let a = 1;
let b = 2.5;
let c = 3;

function myFun(a,b) {
    console.log(Math.round(a+b));   
}

myFun(a,b);
myFun(b,c);
myFun(a,c);

//arrow function
const sum = (p,q)=>{
    console.log(p+q);
    
}

sum(a,c);

//function wout parameter
const hello=() =>
{
    console.log("Hi");
    
}
hello();