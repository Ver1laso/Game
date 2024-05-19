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
        answer = window.prompt("Choose an option: Rock, Paper, or Scissors :)");
    } while (answer != "rock" && answer != "paper" && answer != "scissors") 

    return answer;

}



function game(){ 


    do {

        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();


        if(humanChoice === "rock" && computerChoice === "scissors" ||
            humanChoice === "paper" && computerChoice === "rock" ||
            humanChoice === "scissors" && computerChoice === "paper"){
                humanScore++;
                console.log(" ")
                console.log("Human chose: " + humanChoice);
                console.log("Computer chose: " + computerChoice);
                console.log("Point for Human!");
                console.log(" ");
            }
        else if(computerChoice === "rock" && humanChoice === "scissors" ||
            computerChoice === "paper" && humanChoice === "rock" ||
            computerChoice === "scissors" && humanChoice === "paper"){
                computerScore++;
                console.log(" ")
                console.log("Human chose: " + humanChoice);
                console.log("Computer chose: " + computerChoice);
                console.log("Point for Computer!");
                console.log(" ");
            }
        else {
            console.log(" ")
            console.log("Human chose: " + humanChoice);
            console.log("Computer chose: " + computerChoice);
            console.log("It's a tie! try again!");
            console.log(" ");
        }
        console.log("*****************");
        console.log("Computer Score " + computerScore);
        console.log("Player Score " + humanScore);
        console.log("*****************");

    } while (computerScore < 3 && humanScore < 3);

    if(computerScore === 3) {
        alert("Computer wins!");
    } else {
        alert("Player wins!");
    }
}



game();