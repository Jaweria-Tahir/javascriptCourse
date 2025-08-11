//loops using array
let num = [3, 54, 1, 2];

//simple for loop
for(let i=0 ; i<num.length ; i++)
{
    console.log(num[i]);
}

//for each loop
num.forEach((a) =>{
    console.log(a);
    
});

//array.from
//converting to an array
let name = "Jaweria";
Array.from(name);//conversion to array
console.log(name);//array of strings creates


//for of
for(let a of num)
{
    console.log(a);
    
}

//for in
for(let a in num)
{
    console.log(num[a]);
    
}