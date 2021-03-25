//Rock, paper scissors
//user plays against computer
//user types in "rock", "paper", or "scissors"
// computer randomly picks "rock", "paper", or "scissors"
//decide who wins -- paper beats rock -- rock beats scissors -- scissors beats paper -- same option is a tie
// print the results

function computerPlays(){
    let computerOption = Math.floor(Math.random() * 3) + 1;
    if(computerOption === 1){
        return "Rock"
    }
    else if(computerOption === 2){
        return "Paper"
    }
    else{
        return "Scissors"
    }
};
function playRPS(userChoice, computerChoice){
    if(userChoice === computerChoice){
        return "It's a tie! Go again."
    }
};
console.log(computerPlays());
console.log(playRPS("Rock", "Rock"));
