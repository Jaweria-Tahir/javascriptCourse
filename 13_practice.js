//map
//convert to uppercase
let names = ["ali", "sara", "amna"];
let upperNames = names.map((a)=>
{
   return a.toUpperCase();
})

console.log(upperNames);

//Given [2, 4, 6] → create a new array with each number squared.
let numArr = [2, 4, 6];
let squaredArr = numArr.map((a)=>{
    return a**2;
})
console.log(squaredArr);

//Add "Hello " in front of each name in ["Ali", "Sara"]
let name = ["Ali", "Sara"];
let helloName = name.map((a)=>{
    return `Hello ${a}`;
})
console.log(helloName);

//filter
//Given [5, 12, 8, 130, 44] → keep only numbers greater than 10.
let num2 = [5, 12, 8, 130, 44];
const func = ((a)=>
{
    return a>10;
})
let filterFunc = num2.filter(func);
console.log(filterFunc);

//From ["apple", "banana", "kiwi", "mango"] → keep words with more than 5 letters.
let fruits2 = ["apple", "banana", "kiwi", "mango"];
const func2 =((a)=>{
    return a.length>5;
});
let filterFunc2 = fruits2.filter(func2);
console.log(filterFunc2);

//Given [true, false, true, false] → keep only true values.
let arr = [true, false, true, false];
const trueFalse = ((a)=>{
    return (a===true);
})
let arr1 = arr.filter(trueFalse);
console.log(arr1);

//reduce
//Find the sum of [10, 20, 30].
let num3 = [10, 20, 30];
const func3 = ((a,b)=>
{
    return a+b;
});

let reduceFunc = num3.reduce(func3);
console.log(reduceFunc);

//Find the product of [2, 3, 4].
let num4 =  [2, 3, 4];
const func4 = ((a,b)=>
{
    return a*b;
});

let reduceFunc1 = num4.reduce(func4);
console.log(reduceFunc1);

//Find the largest number in [4, 9, 1, 7].
let arr4 = [4, 9, 1, 7];
let max = 0;
const largestNum = arr4.reduce((a,b) => {
    return a>b?a:b;
})
console.log(largestNum );

//map: Given [5, 10, 15] → subtract 1 from each number.
let arr5 = [5, 10, 15];
const subtractOne = arr5.map((a)=>
{
    return a-1;
});
console.log(subtractOne);

//filter: Given [3, 8, 12, 17, 20] → keep only even numbers.
let arr6 =  [3, 8, 12, 17, 20];
const even = arr6.filter((a)=>
{
    return a%2==0;
});

console.log(even);

//reduce: Given [50, 60, 70, 80] → find the average.
let arr7 = [50, 60, 70, 80];
let sum = 0;
const average = arr7.reduce((a)=>
{
    return sum+=a/arr7.length;
});
console.log(average);

//map + filter: From [1, 2, 3, 4, 5, 6] → double only even numbers.
let arr8 = [1, 2, 3, 4, 5, 6];
let evenArr = arr8.filter((a)=>
{
    return a%2==0;
}) ;
let doubleArr =evenArr.map((a)=>
{
    return a*2 ;
    
});
console.log(doubleArr);

//filter + reduce: From [5, 12, 19, 21, 30] → keep numbers above 15 and sum them.
let arr10 = [5, 12, 19, 21, 30];
let filterFunc5 = arr10.filter((a)=>
{
    return a>15;
});
let reduceFunc5 = filterFunc5.reduce((a,b)=>
{
    return a+b;
});

console.log(reduceFunc5);


//map + reduce: Given ["Ali", "Sara"] → find the total number of characters.
let arr11 = ["Ali", "Sara"];
let mapFunc6 = arr11.map((a)=>
    {
    return a.length;
});
console.log(mapFunc6);

let reduceFunc6 = mapFunc6.reduce((a,b)=>
{
    return a+b;
});
console.log(reduceFunc6);
