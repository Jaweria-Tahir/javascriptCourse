let a = [1, 2, 3, 4, "not given", false];
console.log(a);
console.log(a[0]);
//length of array
console.log(a.length);
//arrays are mutable
a[1] = 5;
console.log(a);

//typeof array
console.log(typeof a);

//print array using for loop
for( let i = 0 ; i < a.length ;i++)
{
    console.log(a[i]);
    
}
 
//array methods & property/operator
//toString(to convert number into string)
//join(to join the ts of array)
//pop(to delete element from start)
//push(to insert element in start)
//shift(to delete element from start)
//unshift(to insert element at start and return new array lenght)
//delete()
//concat(join two or more than two arrays)
//sort(sorting arrays alphabetically,ascending,descending)
//reverse(reverse array)
//splice(add or replace array elements)
//slice(copying a part of array)
let num = [1, 2, 3, 4];
let num1 =[5,6,7];
let num2 =[55, 88 , 99];

//toString
console.log(num.toString());

//join
console.log(num.join("^"));
console.log(num.join(" and "));

//pop
console.log(num.pop());//delted element
console.log(num);//array after deletion
//modifies the original array

//push
console.log(num.push(4));
console.log(num);

//shift
console.log(num.shift());
console.log(num);

//shift
console.log(num.unshift(13));
console.log(num);
//returns new array length and add new element to start of array

//delete
// delete num[0];
console.log(num);

//concat
console.log(num.concat(num1));
console.log(num.concat(num1,num2));

//sort
let sortArray = [2,7,1,3,4];
sortArray.sort();
console.log(sortArray);

let sortArray2 = ["saad","ali","jiya"];
sortArray2.sort();
console.log(sortArray2);

let numbers = [10, 5, 40, 25, 500];
numbers.sort();
console.log(numbers);

//sort for ascending
let numb = [8,9,2,1,6];
let compare=(a,b) =>
{
    return a-b;

}
numb.sort(compare);
console.log(numb);


//sort for descending
let compare2 = (a,b)=>
{
    return b-a;
}
let number1 = [10, 5, 40, 25, 500];
number1.sort(compare2);
console.log(number1);

//reverse
let list = [1,2,3,4];
// list.reverse();
console.log(list);

//splice
console.log(list.splice(2,3,21,22,23));
console.log(list);

//slice
let list1 = [1,2,3,4,6,7];
let sliceArray = list1.slice(2);
let sliceArray1 = list1.slice(2,6);
console.log(sliceArray);
console.log(sliceArray1);
