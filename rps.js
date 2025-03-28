function getComputerChoice () {
    let s = {0:"rock", 1:"paper", 2:"scissors"};
    let rin = Math.floor(Math.random() * 3);
    return s[rin]
}

const result = document.querySelector("div");
const score = document.querySelector("#score");

    let humanScore = 0;
    let computerScore = 0;
    
    function playRound (humanChoice , computerChoice) {
        humanChoice = humanChoice.toLowerCase();
    
        if (humanChoice === computerChoice){
            result.textContent = "it is a tie";
        return;
        }
        let winCon = {
            paper : "rock",
            rock : "scissors",
            scissors : "paper"
        }
    
        if (winCon[humanChoice] === computerChoice){
            result.textContent = "You Win! " +humanChoice+ " beats " +computerChoice ;
            humanScore++;
        }
        else{
            result.textContent = "You Lose! " +computerChoice+ " beats " +humanChoice;
            computerScore++;
        }
        score.textContent = "Your Score   " +humanScore+" - " +computerScore+"   Computer Score" ;

        if (humanScore == 5){
            alert("You won the game");
            humanScore = 0;
            computerScore =0;
        }
        else if (computerScore == 5){
            alert("Computer won, You lost");
            humanScore = 0;
            computerScore =0;
        }
    }


    const btns = document.querySelectorAll("button");

    for (const btn of btns)(
        btn.addEventListener('click',() => {
            playRound(btn.textContent,getComputerChoice())
        })
    )