var humanScore = 0;
var computerScore = 0;


function getRandom(){
    return Math.trunc(Math.random()*11);
}

function getComputerChoice (){
    const randomValue = getRandom();

    if(randomValue <= 3){
        return "rock";
    }
    if(randomValue >3 && randomValue <=6){
        return "paper";
    }
    if(randomValue > 6){
        return "scissors";
    }
};

function getHumanChoice(){

    let answer;
 
    do {
        answer = window.prompt("Choose an option: Rock, Paper, or Scissors :)").toLocaleLowerCase();
    } while (answer != "rock" && answer != "paper" && answer != "scissors") 

    return answer;

}



function game(){ 


    do {

        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        
        if(humanChoice === "rock" && computerChoice === "paper"){
            computerScore++;
            console.log("Point for Computer");
        }
        if(humanChoice === "rock" && computerChoice === "scissors"){
            humanScore++;
            console.log("Point for Human");
        }
        if(humanChoice === "rock" && computerChoice === "rock"){
            console.log("Tie!");
        }
        if(humanChoice === "paper" && computerChoice === "rock"){
            humanScore++;
            console.log("Point for Human");
        }
        if(humanChoice === "paper" && computerChoice === "scissors"){
            computerScore++;
            console.log("Point for Computer");
        }
        if(humanChoice === "paper" && computerChoice === "paper"){
            console.log("Tie!");
        }
        if(humanChoice === "scissors" && computerChoice === "paper"){
            humanScore++;
        }
        if(humanChoice === "scissors" && computerChoice === "rock"){
            computerScore++;
        }
        if(humanChoice === "scissors" && computerChoice === "scissors"){
            console.log("Tie!");
        }
        
        console.log("Computer Score " + computerScore);
        console.log("Player Score " + humanScore);

    } while (computerScore < 3 && humanScore < 3);

    if(computerScore === 3) {
        alert("Computer wins!");
    } else {
        alert("Player wins!");
    }
}



game();