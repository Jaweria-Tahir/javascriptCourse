const prompt = require("prompt-sync")();
//showing marks using for loop
const obj = {
    "jiya":10,
    "ali":19,
    "hamna":7
}

for(let i = 0 ; i < Object.keys(obj).length ; i++)
{
    console.log("marks of :"+ Object.keys(obj)[i] + " are :" + obj[Object.keys(obj)[i]]);
    
}

//using for in
for(let a in obj)
{
    console.log(a + " "+ obj[a]);
    
}

//write program writing try agian until user enters correct number
let cn = 4;
let i;
while(i != cn)
{ 
    console.log("Try again");
    i = prompt("Number?");
    
}

//function to find mean

const mean = (a,b,c,d,e)=>
{
    console.log((a+b+c+d+e)/5);
    
}
mean(1,2,3,4,5);
