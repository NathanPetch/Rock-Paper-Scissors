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
    if (playerSelection === 'rock' && computerSelection === 'paper'){
        computerScoreCounter++
        return 'Computer has paper. You Lose' 
    } else if( playerSelection === 'paper' && computerSelection === 'scissors'){
        computerScoreCounter++
        return 'Computer has scissors. You Lose' 
    } else if (playerSelection === 'scissors' && computerSelection === 'rock'){
        computerScoreCounter++
        return 'Computer has rock. You Lose' 
    } else if (computerSelection === 'rock' && playerSelection === 'paper'){
        playerScoreCounter++
        return 'Computer has rock. You Win' 
    } else if( computerSelection === 'paper' && playerSelection === 'scissors'){
        playerScoreCounter++
        return 'Computer has paper. You Win' 
    } else if (computerSelection === 'scissors' && playerSelection === 'rock'){
        playerScoreCounter++
        return 'Computer has scissors. You Win' 
    } else if(computerSelection === playerSelection){
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
    let playerSelection = prompt('Please type Paper, Rock or Scissors?', '' | null).toLowerCase()
    let computerSelection = getComputerChoice()
    return playRound(playerSelection, computerSelection) 
    
}
/* first to five wins in rock paper scissors is played, 
the console logs the winner of the round and what the current score is
*/
  while (playerScoreCounter<5 && computerScoreCounter<5) {
	  console.log(game())
	    console.log(`The score is: YOU - ${playerScoreCounter} COMPUTER - ${computerScoreCounter}`)	
}
// alerts the that 5 wins have been achieved and gives congratulations or commiserations 

if(computerScoreCounter===5){
console.log('Unfortunate! The computer has beaten you to 5 wins')
} else if (playerScoreCounter===5){
    console.log('Congratulations! You have beaten the computer to 5 wins!')
}