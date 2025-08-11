//count how many odd numbers are in array
let arr1 = [5, 8, 13, 2, 9, 4];
let count = 0;
for(let a of arr1)
{
    if(a%2!==0)
    {
        count++;
    }
}
console.log(count);

//convert to uppercase
let fruits = ["apple", "banana", "mango"];
let upperFruits =[];
 fruits.forEach((a)=>{
    upperFruits.push(a.toUpperCase());
})
console.log(upperFruits);

//print object keys
let person = { name: "Ali", age: 20, city: "Lahore" };
for(let a in person)
{
    console.log(person[a]);
}
//sum object values
let marks = { math: 80, english: 75, science: 90 };
let sum = 0;
for(let a in marks)
{
    sum+=marks[a];
}
console.log(sum);

//Find maximum value
let arr9 = [15, 22, 9, 34, 18];
let max = 0;
for(let a of arr9)
{
    if(a>max)
    {
        max = a;
        
    }
}
console.log(max);

//Reverse an array (without .reverse() method).
let arr10 = [15, 22, 9, 34, 18];
let reverse = [];
for( let a of arr10)
{
    reverse.unshift(a);
}
console.log(reverse);

//Reverse an array (without .reverse() method). without using extra array
let arr11 = [15, 22, 9, 34, 18];
for(let i = 0;i < arr11.length/2;i++)
{
    let temp = arr11[i];
    arr11[i] = arr11[arr11.length-1-i];
    arr11[arr11.length-1-i] = temp;
}
console.log(arr11);

//Key-Value Pairs
let student = { name: "Sara", grade: "A", age: 19 };
for(let a in student)
{
    console.log(a+" "+student[a]);
    
}

//Nested loop practice

let arr12 =[1,2,3,4,5,6,7,8,9];
let count1 = 1;
for(let i = 0 ;i < 3 ; i++)
{
    let row="";
    for(let j = 0 ;j < 3 ; j++){
       row += count1+" ";
       count1++;
    }
    console.log(row);
}