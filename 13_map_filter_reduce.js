let arr=[1,2,3,4,6];

//map method
let newArray = arr.map((a)=>{
    console.log(a);
})
//map with parameter index
arr.map((a,index)=>
{
    console.log(a +" "+index);
})
//map with parmeter index and array 
arr.map((a,index,array)=>
{
    console.log(a +" "+index+" "+array);
})
//map is used to return a new array
let addOne= arr.map((a)=>{
    return a+1;
})
console.log(addOne);

//filter method
let arr2=[45 , 23 , 21 , 78];
let a2=arr2.filter((a)=>
{
    return a<30;//filter elemnts whose value is less than 30
});
console.log(a2);

//reduce
let arr3 = [1 , 2 , 3 , 4 , 5 ,6];
let newArr3 = arr3.reduce((a1,a2)=>
{
    return a1+a2;
});
console.log(newArr3);

//separate method and reduce
const func = (h1,h2)=>{
    return h1+h2;
}
let newFilter = arr3.reduce(func);
console.log(newFilter);