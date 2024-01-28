//function for when computer plays
//randomly return rock paper or scissor
function getComputerChoice(){
    const randomReturn = Math.floor(Math.random() * 3);
    if(randomReturn === 0){
        choice = 'Rock';
    } else if(randomReturn === 1){
        choice = 'Paper';
    } else if(randomReturn === 2){
        choice = 'Scissor'
    }
    return choice;

}
//function that plays a single round of Rock Paper Scissor with 2 parameters (playerSelections and computerSelections)
//return a string that says something adjecent to "You Lose! Paper beats Rock"
function playRound(playerSelections, computerSelections){
    if(playerSelections === computerSelections){
        return 'It"s a tie!'
    } else if(playerSelections == 'Rock' && computerSelections == 'Paper'){
        return 'You lose, Paper beats Rock!'
    } else if(playerSelections == 'Paper' && computerSelections == 'Rock'){
        return 'You win, Paper beats Rock!'
    } else if(playerSelections == 'Scissor' && computerSelections == 'Paper'){
        return 'You win, Scissor beats Paper!'
    } else if(playerSelections == 'Paper' && computerSelections == 'Scissor'){
        return 'You Lose, Scissor beats Paper!'
    } else if(playerSelections == 'Rock' && computerSelections == 'Scissor'){
        return 'You win, Rock beats Scissor!'
    } else if(playerSelections == 'Scissor' && computerSelections == 'Rock'){
        return 'You Lose, Rock beats Scissor!'
    } else {
        return 'You have to pick Rock, Paper or Scissor!'
    }
}

const playerSelections = prompt('Rock, Paper or Scissor?');
const computerSelections = getComputerChoice();
console.log(playRound(playerSelections, computerSelections));
