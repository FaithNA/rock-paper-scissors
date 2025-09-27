let humanWin = 0;
let computerWin = 0;
let humanChoice;
let currentRound = 0;
const MAXROUND = 3;

let humanMove = document.querySelector(".human-move .btn-emj");

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const humanScore = document.querySelector("#human");
const computerScore = document.querySelector("#computer");

const message = document.querySelector(".score p");
const reset = document.querySelector("#reset");

let computerChoice;
let computerMove = document.querySelector(".computer-move .btn-emj");


reset.addEventListener("click", ()=>{
    humanWin = 0;
    computerWin = 0;
    message.textContent = "Choose your move to start!";
    computerMove.textContent = "❓";
    humanMove.textContent = "❓";
    humanScore.textContent = 0;
    computerScore.textContent = 0;
    currentRound = 0;
    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;
    message.removeAttribute("style");
});

function getComputerMove(){
let num = Math.random();
    if (num<1/3){
        computerChoice = 'rock';
        computerMove.textContent = "✊";

    }
    else if(num<2/3){
        computerChoice = 'paper';
        computerMove.textContent = "✋";
    }
    else{
        computerChoice = 'scissors';
        computerMove.textContent = "✌";
    }
    return computerChoice;
}

function checkWinner(){
    if(humanChoice == computerChoice){
        console.log("draw");
        message.textContent = "You both played " + humanChoice + ", it is a draw";
        currentRound++;
    }
    else if((humanChoice == 'rock' && computerChoice == 'paper') || (humanChoice == 'scissors' && computerChoice == 'rock') || (humanChoice == 'paper' && computerChoice == 'scissors')){
        console.log("computer wins");
        computerWin++;
        console.log("Computer: " + computerWin);
        computerScore.textContent = computerWin;
        message.textContent = "You played " + humanChoice + ", computer played " + computerChoice + ", " + computerChoice + " beats " + humanChoice;
        currentRound++;
    }
    else{
        console.log("you win");
        humanWin++;
        console.log("Human: " + humanWin);
        humanScore.textContent = humanWin;
        message.textContent = "You played " + humanChoice + ", computer played " + computerChoice + ", " + humanChoice + " beats " + computerChoice;
        currentRound++;
    }
    if(currentRound == MAXROUND){
        gameEnd();
    }
}



function getHumanMove(){
    rock.addEventListener("click", ()=>{
    humanChoice = 'rock';
    humanMove.textContent = "✊";
    getComputerMove();
    checkWinner();
    });

    paper.addEventListener("click", ()=>{
        humanChoice='paper'
        humanMove.textContent = "✋";
        getComputerMove();
        checkWinner();
    });

    scissors.addEventListener("click", ()=>{
        humanChoice='scissors';
        humanMove.textContent = "✌";
        getComputerMove();
        checkWinner();
    });
    return humanChoice;
}







function play(){
    getHumanMove();
}
play();


function gameEnd(){
    let finalMessage = "";
    if (humanWin > computerWin) {
        finalMessage = "Game Over! You win the match! 🎉";
    } else if (computerWin > humanWin) {
        finalMessage = "Game Over! The computer wins the match! 💻";
    } else {
        finalMessage = "Game Over! It's a tie match!";
    }

    message.textContent = finalMessage;
    message.setAttribute("style", "font-weight: bold; font-size: 20px");
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
}
