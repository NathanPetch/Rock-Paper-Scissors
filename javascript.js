// Choose random selection of rock, paper or scissors for computer
function getComputerChoice(){
let gameOptions = ['rock', 'paper', 'scissors'];
let random = Math.floor(Math.random() * gameOptions.length);
return gameOptions[random];
}
/*
Gather player selection (case insensitive) and computers selection 
Compare selections to determine the winner
Return string to player to alert if won or lost.
warns player if they type in something that is not one of three options
*/
function playRound(playerSelection, computerSelection){
    if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper'){
        computerScoreCounter++
        return 'Computer has paper. You Lose' 
    } else if( playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissors'){
        computerScoreCounter++
        return 'Computer has scissors. You Lose' 
    } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'rock'){
        computerScoreCounter++
        return 'Computer has rock. You Lose' 
    } else if (computerSelection === 'rock' && playerSelection.toLowerCase() === 'paper'){
        playerScoreCounter++
        return 'Computer has rock. You Win' 
    } else if( computerSelection === 'paper' && playerSelection.toLowerCase() === 'scissors'){
        playerScoreCounter++
        return 'Computer has paper. You Win' 
    } else if (computerSelection === 'scissors' && playerSelection.toLowerCase() === 'rock'){
        playerScoreCounter++
        return 'Computer has scissors. You Win' 
    } else if(computerSelection === playerSelection.toLowerCase()){
        return 'Its a tie';
    } else if(playerSelection !== ['rock', 'paper', 'scissors']){
        return 'Please only type one of the three options'
    }
    }
//logs player game score
let playerScoreCounter = 0
//logs computers game score
let computerScoreCounter = 0
//console.log(`The score is player ${playerScoreCounter} and computer ${computerScoreCounter}`)

function game() {
    let playerSelection = prompt('Please type Paper, Rock or Scissors?', '' | null)
    let computerSelection = getComputerChoice()
    return playRound(playerSelection, computerSelection) 
    
}
/* Five rounds of the rock paper scissors is played, 
the console logs the winner and what the current score is
*/
for(let i = 0; i < 5; i++){
    console.log(game())
    console.log(`The score is: YOU - ${playerScoreCounter} COMPUTER - ${computerScoreCounter}`)

}