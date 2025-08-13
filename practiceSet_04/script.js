//write a program using prompt to take input of age as a value from user and use alert to tell if he can drive or not
//use comfirm to ask user if he want to see the prompt again in part 1
//use console.error to log th error if age entered is negative
//write a program to change the url to google.com if user enters a number greater than 4
//change the background of page 
//change background of the page to any color based on user input through the prompt


let write = confirm("You want see the prompt?");
let color = prompt("Enter color you want to give to background:");
document.body.style.background=color;

// let negativeAge = (age)=>
// {
//     return age < 0;//if age smaller than 0 then return true
// };
// do
// {
// let age = prompt("Enter age:");
// age = Number.parseInt(age);
// if(age > 4)
// {
//     location.href = "https://www.google.com";
//     break;
// }
// if(negativeAge(age))
// {
//     console.error("Negative age is not allowed");   
//     break;//if negativeAge true then break
// }
// if(age < 18 && !(negativeAge(age))) 
// {
//     alert("Cannot drive!!!");
    
// }
// else{
//     alert("Can drive!!!");
    
// }


// if(!(negativeAge(age)))
// {
//     write = confirm("You want see the prompt again?");
// }
// }while(write);


