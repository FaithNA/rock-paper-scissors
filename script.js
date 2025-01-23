console.log("Rock Paper Scissors Game");



    let humanScore=0;
    let computerScore=0;
    let humanChoice;
    let compuerChoice;

function playGame(){
    function getComputerChoice(){
        console.log("Computer choice: ");
        random = Math.random();
        if (random>=0 && random < 1/3){
            computerChoice = "Rock";
        }else if(random >=1/3 && random<2/3){
            computerChoice = "Paper";
        }else if(random >=2/3 && random <=1){
            computerChoice = "Scissors";
        }
        console.log(computerChoice);
        return computerChoice;
    }
    
    computerSelection = getComputerChoice();
    
    function getHumanChoice(){
        console.log("Human choice: ");
        let choice = prompt("Enter rock/paper/scissors");
        console.log(choice);
        return choice;
        
    }
    
    humanSelection = getHumanChoice();

    console.log(playRound(humanSelection, computerSelection));

    function playRound(humanChoice, computerChoice){
        if ((humanChoice == "Rock" && computerChoice == "Paper") || (humanChoice == "Paper" && compuerChoice == "Scissors") || (humanChoice == "Scissors" && computerChoice == "Rock")){
            console.log("You lose, computer wins");
            computerScore++;
        }else if ((computerChoice == "Rock" && humanChoice == "Paper") || (computerChoice == "Paper" && humanChoice == "Scissors") || (computerChoice == "Scissors" && humanChoice == "Rock")){
            console.log("You win, computer loses");
            humanScore++;
        }else if(computerChoice==humanChoice){
            console.log("It is a draw");
        }

        console.log(humanScore, computerScore);
    }

}
for (let i=0; i<=4; i++){
    console.log(playGame());
}

function finalWinner(){
    if(computerScore>humanScore){
        console.log("You lose the game");
    }else if(computerScore==humanScore){
        console.log("Overall draw");
    }
    else if(computerScore<humanScore){
        console.log("Congrats, you win!!!");
    }
}

finalWinner();