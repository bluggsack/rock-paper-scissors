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
- when the user picks paper and the computer picks rock, the user still loses, even though they should win.
        * User-paper = 2, computer-rock = 1
- when the user picks rock and the computer picks paper, the user wins, when they should lose.
        * User-rock = 1, computer-paper = 2
- when the user picks paper and the computer picks scissors, the user wins, when they should lose.
        * User-paper = 2, computer-scissors = 3
- when the user picks scissors and the computer picks paper, the user loses, when they should win.
        * User-scissors = 3, computer-paper = 2
*/

let computerOption = Math.floor(Math.random() * 3) + 1;
let userOption = Math.floor(Math.random() * 3) + 1;

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

    if(computerOption === userOption){
        return "It's a tie! Let's try that again."
    }else if(computerOption < userOption){
        return "You lose! Better luck next time!"
    }else{
        return "You win! Good job!"
    }
    /*
    //user chooses rock
    if(userChoice === "rock" && computerChoice === "rock"){
        return "It's a tie! Go again."
    }else if(userChoice === "rock" && computerChoice === "paper"){
        return "You lose! Paper beats rock!"
    }else if(userChoice === "rock" && computerChoice === "scissors"){
        return "You win! Rock beats scissors!"
    }//user chooses scissors
    else if(userChoice === "scissors" && computerChoice === "scissors"){
        return "It's a tie! Go again."
    }else if(userChoice === "scissors" && computerChoice === "paper"){
        return "You win! Scissors beats paper!"
    }else if(userChoice === "scissors" && computerChoice === "rock"){
        return "You lose! Rock beats scissors!"
    }//user chooses paper
    else if(userChoice === "paper" && computerChoice === "paper"){
        return "It's a tie! Go again."
    }else if(userChoice === "paper" && computerChoice === "rock"){
        return "You win! Paper beats rock!"
    }else if(userChoice === "paper" && computerChoice === "scissors"){
        return "You loser! Scissors beats paper!"
    }
    */
};

console.log(playRockPaperScissors(userPlay, computerPlay));
console.log(userPlay());
console.log(computerPlay());