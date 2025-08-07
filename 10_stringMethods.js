//length
let name = "Jiya";
console.log(name.length);

let name1 = "Jiy\"a";
console.log(name1.length);//5

//toUpperCase()
console.log(name.toUpperCase());

//toLowerCase()
console.log(name.toLowerCase());

//slice
console.log(name.slice(2,4));
console.log(name.slice(1));

//replace
console.log(name.replace("iya","aweria"));

//concat
let firstName = "Jaweria";
let lastName = "Tahir";
let fullName = firstName.concat(" "+lastName);
console.log(fullName);

//trim
let friend2 = "       Mina";
console.log(friend2.trim());

//Accessing string chracters using index numbers
let fr = "Ali";
console.log(fr[0]);
console.log(fr[2]);
console.log(fr);


//use a for loop to print a string using string methods
for(let i = 0; i < fr.length ; i++)
{
    console.log(fr.charAt(i));
    
}
//STRINGS ARE IMMUTABLE(CAN NEVER CHANGE)
fr[0] = "E";
console.log(fr);