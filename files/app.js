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

var scores, roundScore, activePlayer;

scores = [0,0];
roundScore = 0;
activePlayer = 0; // 0: player1 begins, 1: player2 plays

document.querySelector('.dice').style.display = 'none'; //hide an element
//style method then display is the css property and none the css value

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
    

document.querySelector('.btn-roll').addEventListener('click', function(){
                                                    
    // 1. Random number                                                    
    var dice = Math.floor(Math.random() * 6) + 1;
    
    // 2. Display the dice result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png'
    
    // 3. Update the round score IF the rolled number was NOT a 1
    if(dice !== 1){
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore; 
    }else{
        // Next player
        document.querySelector('.dice').style.display = 'none';
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;
        
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        
        /*
        Toggle
        The first parameter removes the specified class from an element, and returns false. 
        If the class does not exist, it is added to the element, and the return value is true.
        */
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        


    }
     
});































