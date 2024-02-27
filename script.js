//function for when computer plays
//randomly return rock paper or scissor
//keep track or score

let playerScore = 0;
let botScore = 0;
const resultsPlayer = document.querySelector('.results-player')
const resultsBot = document.querySelector('.results-bot')
const results = document.querySelector('.results-div')

const playButton = document.querySelectorAll('.playButtons');
playButton.forEach((button) => {
button.addEventListener('click', () => {
    let player = button.id;
        if(playerScore < 5 && botScore < 5){
            playRound(player)
        }
    })
})

//function that plays a single round of Rock Paper Scissor with 2 parameters (playerSelections and computerSelections)
//return a string that says something adjecent to "You Lose! Paper beats Rock"

function playRound(playerSelections, computerSelections){
    function getComputerChoice(){
        let randomReturn = Math.floor(Math.random() * 3);
        if(randomReturn === 0){
            choice = 'Rock';
        } else if(randomReturn === 1){
            choice = 'Paper';
        } else if(randomReturn === 2){
            choice = 'Scissor'
        }
        return choice;
    
    }
    let choice = ["Rock","Paper","Scissor"];
    computerSelections = getComputerChoice(choice);
    if(playerSelections === computerSelections){
        results.textContent = (`It's a tie! no one gets a point!`);

    } else if(playerSelections == 'Rock' && computerSelections == 'Paper'){
        results.textContent = (`You lose, Paper beats Rock!`);
        botScore = botScore + 1;
        resultsPlayer.textContent = (`Player has: ${playerScore} points`);
        resultsBot.textContent = (`Bot has: ${botScore} points`);

    } else if(playerSelections == 'Paper' && computerSelections == 'Rock'){
        results.textContent = ('You win, Paper beats Rock!');
        playerScore = playerScore + 1;
        resultsPlayer.textContent = (`Player has: ${playerScore} points`);
        resultsBot.textContent = (`Bot has: ${botScore} points`);

    } else if(playerSelections == 'Scissor' && computerSelections == 'Paper'){
        results.textContent = ('You win, Scissor beats Paper!');
        playerScore = playerScore + 1;
        resultsPlayer.textContent = (`Player has: ${playerScore} points`);
        resultsBot.textContent = (`Bot has: ${botScore} points`);

    } else if(playerSelections == 'Paper' && computerSelections == 'Scissor'){
        results.textContent = ('You Lose, Scissor beats Paper!');
        botScore = botScore + 1;
        resultsPlayer.textContent = (`Player has: ${playerScore} points`);
        resultsBot.textContent = (`Bot has: ${botScore} points`);

    } else if(playerSelections == 'Rock' && computerSelections == 'Scissor'){
        results.textContent = ('You win, Rock beats Scissor!');
        playerScore = playerScore + 1;
        resultsPlayer.textContent = (`Player has: ${playerScore} points`);
        resultsBot.textContent = (`Bot has: ${botScore} points`)

    } else if(playerSelections == 'Scissor' && computerSelections == 'Rock'){
        results.textContent = ('You Lose, Rock beats Scissor!')
        botScore = botScore + 1;
        resultsPlayer.textContent = (`Player has: ${playerScore} points`)
        resultsBot.textContent = (`Bot has: ${botScore} points`)

    } else if(playerSelections === null || playerSelections === undefined){
        botScore = botScore + 1;
        resultsBot.textContent = (`You have forfeited this round bot has: ${botScore}`)
    }

    if(playerScore == 5 || botScore == 5){
        results.textContent = ('Game Over, The scores are:')
    if(playerScore > botScore){
        resultsPlayer.textContent = ('Player has beat bot by: '+(playerScore-botScore).toString()+ ' points')
    }else if(botScore > playerScore){
        resultsBot.textContent = ('Bot has beat the player by: ' +(botScore-playerScore).toString()+ ' points')
    }
}

}