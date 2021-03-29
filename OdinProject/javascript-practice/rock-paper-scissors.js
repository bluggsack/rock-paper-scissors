/*
-------
MY PLAN
-------
- Ask the user if they would like to play rock paper scissors.
- If yes, ask the user what choice they will go with (rock, paper, scissors)
- Get the computers choice via a random number that is associated with either Rock, paper, or scissors.
- Compare the users and computers choice. Decide who wins by following the rules of the game.
- Output whoever won the round, first to 5 round wins is the winner of the game.
- Return to the beginning of the game.
*/

//Rock, paper scissors
//user plays against computer
//user types in "rock", "paper", or "scissors"
// computer randomly picks "rock", "paper", or "scissors"
//decide who wins -- paper beats rock -- rock beats scissors -- scissors beats paper -- same option is a tie
// print the results

/*
------------------
What i need to fix
------------------

*/


const computerOption = Math.floor(Math.random() * 3) + 1;
const userOption = Math.floor(Math.random() * 3) + 1;
let userPoints = 0;
let computerPoints = 0;

function computerPlay(){
   
    if(computerOption === 1){
        return "rock"
    }
    else if(computerOption === 2){
        return "paper"
    }
    else if(computerOption === 3){
        return "scissors"
    }
};

function userPlay(){
    
    if(userOption === 1){
        return "rock"
    }
    else if(userOption === 2){
        return "paper"
    }
    else if(userOption === 3){
        return "scissors"
    }
};

function playRockPaperScissors(playerSelection, computerSelection){
    //const playerSelection = prompt("Let's play Rock, Paper, Scissors! What would you like to go with?");

    if((computerOption === 1 && userOption === 1) || (computerOption === 2 && userOption === 2) || (computerOption === 3 && userOption === 3)){
        return "It's a tie! Let's try that again."
    }else if((computerOption === 1 && userOption === 3) || (computerOption === 2 && userOption === 1) || (computerOption === 3 && userOption === 2)){
        computerPoints++;
        return "You lose! Better luck next time!"
    }else{
        userPoints++;
        return "You win! Good job!"
    }
};


function game(){

    while(userPoints < 6 || computerPoints < 6){
        console.log(playRockPaperScissors(userPlay, computerPlay));
        console.log(userPlay());
        console.log(computerPlay());
        console.log(userPoints);
        console.log(computerPoints);
    }
};


console.log(game());


//console.log(playRockPaperScissors(userPlay, computerPlay));


