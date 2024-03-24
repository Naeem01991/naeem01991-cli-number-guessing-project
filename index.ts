#! /usr/bin/env node
//shabang
console.log("Guess a number between 1 to 8");
// varible create
let a: number = Math.floor(Math.random()*7)
import inquirer from "inquirer";
while(true){
    let input = await inquirer.prompt(
        {name: "Guess", type: "number",
    message: "Enter yur guess number you want between 1 to 8:"})


    // provide code
    let ans: number = input.Guess
    if (a==ans)
    {console.log("Congratulation your number is correct")
break;}
else{console.log("Sorry you guess a wrong number try again")}
}