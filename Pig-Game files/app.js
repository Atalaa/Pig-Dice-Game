/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

//The querySelector() method returns the first element that matches a specified CSS selector(s) in the document

//The textContent property sets or returns the textual content(as it is) of the specified node, and all its descendants.
//document.querySelector('#current-' + activePlayer).textContent = dice; 

//Return the innerHTML property: HTMLElementObject.innerHTML
//Set the innerHTML property: HTMLElementObject.innerHTML = text
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';     

//document.querySelector('#current-' + activePlayer).textContent = '<em>' + dice + '</em>';     
//will output plain text: <em>3</em>

var scores, roundScore, activePlayer, gamePlaying;
startingGame();

//ROLL DICE EVENT
document.querySelector('.btn-roll').addEventListener('click', rollDice);
                                                                  

//HOLD EVENT
document.querySelector('.btn-hold').addEventListener('click', hold);

//NEW GAME EVENT
document.querySelector('.btn-new').addEventListener('click', startingGame);





//EXTERNAL FUNCTIONS
function startingGame(){
    scores = [0,0];
    activePlayer = 0; // 0: player1 begins, 1: player2 plays
    roundScore = 0;
    gamePlaying = true;
    
    document.querySelector('.dice').style.display = 'none';
    
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1'; 
    document.getElementById('name-1').textContent = 'Player 2';
    
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
};


function rollDice(){     
    if (gamePlaying) {
        // 1. Random number                                                    
        var dice = Math.floor(Math.random() * 6) + 1;

        // 2. Display the dice result
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png'

        // 3. Update the round score IF the rolled number was NOT a 1
        if(dice !== 1){
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore; //score in this round
        }else{
            nextPlayer();
        }
    }
 }; 


function hold(){
    if (gamePlaying) {
        // 1. Add the current score to the global score
        scores[activePlayer] += roundScore;

        // 2. Update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        //Check if player won the game
        if(scores[activePlayer] >= 20){
            document.querySelector('#name-' + activePlayer).textContent = 'WINNER !'; 
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');    
            gamePlaying = false;
        }else{
            nextPlayer();
        }
    }
};



function nextPlayer(){
    // Next player
    document.querySelector('.dice').style.display = 'none';
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');   
    /*
    Toggle
    The first parameter removes the specified class from an element, and returns false. 
    If the class does not exist, it is added to the element, and the return value is true.
    */
};
