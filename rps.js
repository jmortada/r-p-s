console.log("helllo world!");

function getComputerChoice () {
    let s = {0:"rock", 1:"paper", 2:"scissors"};
    let rin = Math.floor(Math.random() * 3);
    return s[rin]
}

console.log(getComputerChoice())

let message = "enter rock paper or scissors";

function getHumanChoice () {
    return prompt(message);
}

let humanScore = 0;
let computerScore = 0;

function playRound (humanChoice , computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice)
        console.log("it is a tie");
    return;

    let winCon = {
        paper : "rock",
        rock : "scissors",
        scissors : "paper"
    }

    if (winCon[humanChoice] === computerChoice){
        console.log("You Win! " +humanChoice+ " beats " +computerChoice );
        humanScore++;
    }
    else{
        console.log("You Lose! " +computerChoice+ " beats " +humanChoice);
        computerScore++;
    }
}