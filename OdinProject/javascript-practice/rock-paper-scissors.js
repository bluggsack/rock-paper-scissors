//Rock, paper scissors
//user plays against computer
//user types in "rock", "paper", or "scissors"
// computer randomly picks "rock", "paper", or "scissors"
//decide who wins -- paper beats rock -- rock beats scissors -- scissors beats paper -- same option is a tie
// print the results

function computerPlays(){
    let computerOption = Math.floor(Math.random() * 3) + 1;
    if(computerOption === 1){
        return "rock"
    }
    else if(computerOption === 2){
        return "paper"
    }
    else{
        return "scissors"
    }
};

function playRPS(userChoice, computerChoice){
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
};

const userChoice = (prompt("Let's play Rock, Paper, Scissors! What will you go with?"));
const computerChoice = computerPlays();
console.log(playRPS(userChoice.toLowerCase, computerChoice.toLowerCase));
console.log(userChoice);
console.log(computerChoice);
