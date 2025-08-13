const prompt = require("prompt-sync");

//alert,prompt,confirm
alert("Enter value of a:");
let a = prompt("Enter a:",9);
a = Number.parseInt(a);
alert("You entered a of type:"+typeof a);
let write = confirm("Do you want to write it to the page");
if(write)
{
    document.write(a);
}
else{
    document.write("please allow me to write");
}
//it will show an error for alert(), prompt(), and confirm() work because they’re part of the browser’s