// Choose random selection of rock, paper or scissors for computer
function getComputerChoice(){
let gameOptions = ['Rock', 'Paper', 'Scissors'];
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
    
}