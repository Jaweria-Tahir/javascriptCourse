const prompt = require("prompt-sync")();
//write a js program to generate a random number and store it in a variable
//the program then takes the input from the user to tell whether the guess was correct greater or lesser than the original number
//tell score(no of guesses)
//the program will terminate when the number is guessed


//random number between 0 to N
let limit = 100;
let num = Math.floor(Math.random() * (limit+1));
console.log(num);

//take input from user
let guess;
let count = 0;
do
{
guess = prompt("Enter your guess:");
guess = Number.parseInt(guess);
if(guess==num)
    {
        console.log("Congratulations!! You guessed the number correct.");
        
    }else if(guess>=num)
    {
        console.log("Try Again!! You guessed a greater number");
    }
    else if(guess<=num)
    {
        console.log("Try Again!! You guessed a lesser number");
    }
    count++;
}while(guess!=num)
    
    console.log("Your score:"+count);
    