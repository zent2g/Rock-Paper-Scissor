//function for when computer plays
//randomly return rock paper or scissor
//keep track or score

let playerScore = 0;
let botScore = 0;



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
        console.log(`It"s a tie! no one gets a point!`);
    } else if(playerSelections == 'Rock' && computerSelections == 'Paper'){
        console.log(`You lose, Paper beats Rock!`);
        botScore = botScore + 1;
        console.log(`Player has: ${playerScore} points`)
        console.log(`Bot has: ${botScore} points`)
    } else if(playerSelections == 'Paper' && computerSelections == 'Rock'){
        console.log('You win, Paper beats Rock!');
        playerScore = playerScore + 1;
        console.log(`Player has: ${playerScore} points`)
        console.log(`Bot has: ${botScore} points`)
    } else if(playerSelections == 'Scissor' && computerSelections == 'Paper'){
        console.log('You win, Scissor beats Paper!')
        playerScore = playerScore + 1;
        console.log(`Player has: ${playerScore} points`)
        console.log(`Bot has: ${botScore} points`)
    } else if(playerSelections == 'Paper' && computerSelections == 'Scissor'){
        console.log('You Lose, Scissor beats Paper!');
        botScore = botScore + 1;
        console.log(`Player has: ${playerScore} points`)
        console.log(`Bot has: ${botScore} points`)
    } else if(playerSelections == 'Rock' && computerSelections == 'Scissor'){
        console.log('You win, Rock beats Scissor!')
        playerScore = playerScore + 1;
        console.log(`Player has: ${playerScore} points`)
        console.log(`Bot has: ${botScore} points`)
    } else if(playerSelections == 'Scissor' && computerSelections == 'Rock'){
        console.log('You Lose, Rock beats Scissor!')
        botScore = botScore + 1;
        console.log(`Player has: ${playerScore} points`)
        console.log(`Bot has: ${botScore} points`)
    } else if(playerSelections === null || undefined){
        botScore = botScore + 1;
        console.log(`You have forfeited this round ${botScore}`)
    }
  }

for(let i = 0; i < 5; i++){
    const playerSelections = prompt('Rock, Paper or Scissor?');
    const computerSelections = getComputerChoice();
    console.log(playRound(playerSelections, computerSelections));
}

    if(playerScore > botScore){
        console.log('Player has beat bot by: '+(playerScore-botScore).toString()+ ' points')
    }else if(botScore > playerScore){
        console.log('Bot has beat the player by: ' +(botScore-playerScore).toString()+ ' points')
    }


//loop playRound function 5 times

