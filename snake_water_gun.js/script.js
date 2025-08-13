//use js to create game of snake water & gun .
//game should ask you to enter s,w,g
//snake drinks water
//gun hits snake
//water drops gun
//the computer should be randomly able to generate s,w,g
//declare win or loss using alert
//use confirm and prompt as required

let playAgain = true ;
while(playAgain)
{
let choice = prompt("Enter your choice:\n1.s for Snake\n2.w for Water\n3.g for Gun");
let option = ["s","w","g"];
let randomChoice = option[Math.floor(Math.random()*(option.length))];
alert("Player 1 choose:"+choice);
alert("Player 2 choose:"+randomChoice);
if(choice == "s" && randomChoice == "g")
{
    alert("Player 2 won");
}
if(choice == "w" && randomChoice == "w")
{
    alert("Player 1 won");
}
//
if(choice == "s" && randomChoice == "w")
{
    alert("Player 1 won");
}
if(choice == "w" && randomChoice == "s")
{
    alert("Player 2 won");
}
//
if(choice == "w" && randomChoice == "g")
{
    alert("Player 1 won");
}
if(choice == "g" && randomChoice == "w")
{
    alert("Player 2 won");
}
if(choice == "g" && randomChoice == "g" ||choice == "w" && randomChoice == "w"||choice == "s" && randomChoice == "s")
{
    alert("Tie");
}

playAgain = confirm("Do you want to play again?");
}