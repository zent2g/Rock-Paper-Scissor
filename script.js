//function for when computer plays
//randomly return rock paper or scissor
function getComputerChoice(){
    choice = ['Rock', 'Paper', 'Scissor']
    return choice = Math.floor(Math.random() * choice.length);
}
//function that plays a single round of Rock Paper Scissor with 2 parameters (playerSelections and computerSelections)
//return a string that says "You Lose! Paper beats Rock"
function playRound(playerSelections, computerSelections){
    if(playerSelections === computerSelections){
        return winCon = 'It"s a tie!';
    } else if(playerSelections === 'Rock' && computerSelections === 'Paper'){
        return winCon = 'You lose, Paper beats Rock!'
    } else if(playerSelections === 'Paper' && computerSelections === 'Rock'){
        return winCon = 'You win, Paper beats Rock!'
    } else if(playerSelections === 'Scissor' && computerSelections === 'Paper'){
        return winCon = 'You win, Scissor beats Papper!'
    } else if(playerSelections === 'Paper' && computerSelections === 'Scissor'){
        return winCon = 'You Lose, Papper beats Scissor!'
    }
    
}

const playerSelections = 'Rock';
const computerSelections = getComputerChoice();
console.log(playRound(playerSelections, computerSelections));
