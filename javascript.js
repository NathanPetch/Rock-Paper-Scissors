// Choose random selection of rock, paper or scissors for computer
function getComputerChoice(){
let gameOptions = ['rock', 'paper', 'scissors'];
let random = Math.floor(Math.random() * gameOptions.length);
return gameOptions[random];
}
console.log(getComputerChoice())
/*
Gather player selection and computers selection 
Compare selections to determine the winner
Return string to player to alert if won or lost.
*/

function playRound(playerSelection, computerSelection){
    if (playerSelection === 'rock' && computerSelection === 'paper'){
        return 'Computer has paper. You Lose'
    } else if( playerSelection === 'paper' && computerSelection === 'scissors'){
        return 'Computer has scissors. You Lose'
    } else if (playerSelection === 'scissors' && computerSelection === 'rock'){
        return 'Computer has rock. You Lose'
    } else if (computerSelection === 'rock' && playerSelection === 'paper'){
        return 'Computer has rock. You Win'
    } else if( computerSelection === 'paper' && playerSelection === 'scissors'){
        return 'Computer has paper. You Win'
    } else if (computerSelection === 'scissors' && playerSelection === 'rock'){
        return 'Computer has scissors. You Win'
    } else if(computerSelection === playerSelection){
        return 'Its a tie'
    }
}
