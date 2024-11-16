let humanScore = 0;
let compScore = 0;

console.log("Welcome to Rock Paper Scissors! Beat the Computer 5 rounds to win.");

while(true){
    console.log("==========================================");
    console.log("Your Score: " + humanScore);
    console.log("Computer Score: "+ compScore);

    if(humanScore == 3 || compScore == 3){
        humanScore == 3? console.log("CONRATULATIONS! YOU WON!!!"): console.log("GAME OVER! Better Luck Next Time :(");
        break;
    }

    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    switch(playRound(humanChoice, computerChoice)){
        case "draw":
            console.log("It's a draw! One more time");
            break;
        case "human":
            humanScore+=1;
            console.log("You won! " + humanChoice + " beats " + computerChoice + ".");
            break;
        case "computer":
            compScore+=1;
            console.log("You lose! " + computerChoice + " beats " + humanChoice + ".");
            break;
    };
}

function playRound(humanChoice, computerChoice){

    if(humanChoice === computerChoice){
        return "draw";
    }

    if(humanChoice === "rock" && computerChoice === "scissor" ||
        humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "scissor" && computerChoice === "paper"){
            return "human";
    }
    
    return "computer";
}

function getHumanChoice() {
    let humanChoice = prompt("Input your Choice: ");
    return humanChoice.toLowerCase();
}

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