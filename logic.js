let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  switch (choice) {
    case 0: return "rock";
    case 1: return "paper";
    default: return "scissors";
  }
}

function getHumanChoice() {
  let choice = prompt("Rock or Paper or Scissors", "Rock")
  return choice;
}



function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();
  if (humanChoice == computerChoice) {
    console.log("It's a tie!");
    return;
  }
  if ((humanChoice == "rock" && computerChoice == "paper") ||
      (humanChoice == "paper" && computerChoice == "scissors") ||
      (humanChoice == "scissors" && computerChoice == "rock")) {

    computerScore+=1;
    console.log("Computer won!")
  } else {
    humanScore+=1;

    
    console.log("Human won!")
  }
}


function playGame() {
  
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  
  playRound(humanSelection, computerSelection);
}

playGame();
playGame();
playGame();
playGame();
playGame();
let winner = (computerScore > humanScore ? "Computer" : 
              computerScore == humanScore ? "nobody" : "Human");
console.log(`
  The total score:\n
  Computer - ${computerScore}
  Human - ${humanScore}\n
  The winner is ${winner}`
)