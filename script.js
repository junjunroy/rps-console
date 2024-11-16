let humanScore = 0;
let compScore = 0;

let humanScoreBoard = document.querySelector("div>span");
humanScoreBoard.textContent = humanScore;
let computerScoreBoard = document.querySelector(".computer span");
computerScoreBoard.textContent = compScore;

console.log("Welcome to Rock Paper Scissors! Beat the Computer 5 rounds to win.");

// while(true){
//     console.log("==========================================");
//     console.log("Your Score: " + humanScore);
//     console.log("Computer Score: "+ compScore);

//     if(humanScore == 3 || compScore == 3){
//         humanScore == 3? console.log("CONRATULATIONS! YOU WON!!!"): console.log("GAME OVER! Better Luck Next Time :(");
//         break;
//     }

//     let humanChoice = getHumanChoice();
//     let computerChoice = getComputerChoice();

//     switch(playRound(humanChoice, computerChoice)){
//         case "draw":
//             console.log("It's a draw! One more time");
//             break;
//         case "human":
//             humanScore+=1;
//             console.log("You won! " + humanChoice + " beats " + computerChoice + ".");
//             break;
//         case "computer":
//             compScore+=1;
//             console.log("You lose! " + computerChoice + " beats " + humanChoice + ".");
//             break;
//     };
// }

function playRound(humanChoice, computerChoice){

    if(humanChoice === computerChoice){
        return "draw";
    }

    if(humanChoice === "rock" && computerChoice === "scissor" ||
        humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "scissor" && computerChoice === "paper"){
            // humanScore += 1;
            humanScoreBoard.textContent = ++humanScore;
            return "human";
    }
    
    // compScore += 1;
    computerScoreBoard.textContent = ++compScore;
    return "computer";
}

// function getHumanChoice() {
//     let humanChoice = prompt("Input your Choice: ");
//     return humanChoice.toLowerCase();
// }

let humanChoice = "";
let computerChoice = "";

//listeners for human choices
const rockBtn = document.querySelector("#rock");
rockBtn.addEventListener("click", () =>{
    humanChoice = "rock";
    computerChoice = getComputerChoice();
    displayRoundWinner(playRound(humanChoice, computerChoice), humanChoice, computerChoice);
});

const paperBtn = document.querySelector("#paper");
paperBtn.addEventListener("click", () =>{
    humanChoice = "paper";
    computerChoice = getComputerChoice();
    displayRoundWinner(playRound(humanChoice, computerChoice), humanChoice, computerChoice);
});

const scissorBtn = document.querySelector("#scissor");
scissorBtn.addEventListener("click", () =>{
    humanChoice = "scissor"
    computerChoice = getComputerChoice();
    displayRoundWinner(playRound(humanChoice, computerChoice), humanChoice, computerChoice);
});

function getComputerChoice(){
    let rand = Math.floor(Math.random() * 3);
    switch (rand){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissor";
        default:
            return "error in randomizing";
    }
}

function displayRoundWinner(winner, humanChoice, computerChoice){
    let displayMsg = "";

    switch(winner){
        case "draw":
            displayMsg = "It's a draw! One more time.";
            break;
        case "human":
            displayMsg = "Hooman wins! " + humanChoice + " beats " + computerChoice + ".";
            break;
        case "computer":
            displayMsg = "AI wins! " + computerChoice + " beats " + humanChoice + ".";
            break;
        default:
            displayMsg = "An error occured";
    }
    const roundWinnerBoard = document.querySelector(".result");
    roundWinnerBoard.textContent = displayMsg;
}