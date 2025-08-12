const prompt = require("prompt-sync")();
//create an array of numbers and take input from the user to add numbers to this array and ask for adding numbers until 0 is added
let num = [1,2,3,4,5];
let a;
// while(a!=0)
// {
// a = prompt("Enter a number:");
// a = Number.parseInt(a);
// num.push(a);

//  }
// console.log(num);


//filter for numbers divisble by 10
let arr2 = [12 , 20 , 40 , 89 , 90];
let filterFunc = arr2.filter((a)=>
{
    return a%10==0;
});
console.log(filterFunc);


//create an array of square of given numbers
let square = num.map((a)=>
{
    return a**2;
});
console.log(square);

//use reduce to calculate factorial of a given number from an array of first n natural numbers(n being the number whose factorial needs to be calculated)
//asking for number
let n = prompt("Enter number:");
n = Number.parseInt(n);
//creating array
let arr = [] ;
for(let i = 1 ; i <= n ; i++)
{
    arr.push(i);
}
console.log(arr);
//finding factorial
let factorial = arr.reduce((a,b)=>
{
    return a*b;
});
console.log(factorial);
