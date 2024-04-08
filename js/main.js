//Implement logic for handling game state transitions 
//Manage game initialization and setup.

/////////////////////// IMPORT JS FILES ///////////////////////

import { createRoom, resetFurnitureSelect } from './room.js';
import { createTimer, resetTimer, stopTimer } from './timer.js';
import { clearSlots, resetPlayerAppearance, playerOutfit } from './selection.js';
import { selectRandomWinningOutfit, displayWinningOutfit } from './outfit.js';

/////////////////////// CREATE VARIABLES ///////////////////////

let currentDifficultyClass = '';
let timerInstance = '';

/////////////////////// CACHE DOM ELEMENTS ///////////////////////

// Cache Buttons
const difficultyButtons = document.querySelectorAll('.button');
const easyButton = document.getElementById('easyButton');
const hardButton = document.getElementById('hardButton');
const impossibleButton = document.getElementById('impossibleButton');
const helpButton = document.getElementById('helpButton');
const startButton = document.getElementById('startButton');
const homeButton = document.getElementById('homeButton');
const homeButton2 = document.getElementById('homeButton2');

// Cache Popout elements
const helpModal = document.getElementById('helpModal');
const closeHelp = document.querySelector('.close');

// Hide Elements
document.querySelector('.game-screen').style.display = 'none'; 
document.querySelector('.end-screen').style.display = 'none'; 
document.querySelector('.win-screen').style.display = 'none'; 
document.querySelector('.lose-screen').style.display = 'none'; 


/////////////////////// CREATE EVENT LISTENERS ///////////////////////

// Easy Button Selection
easyButton.addEventListener('click', function() {
    currentDifficultyClass = 'easy';
    easyButton.classList.remove('selected');
    hardButton.classList.remove('selected');
    impossibleButton.classList.remove('selected');
    easyButton.classList.add('selected');
    enableStartButton();
});

// Hard Button Selection
hardButton.addEventListener('click', function() {
    currentDifficultyClass = 'hard';
    easyButton.classList.remove('selected');
    hardButton.classList.remove('selected');
    impossibleButton.classList.remove('selected');
    hardButton.classList.add('selected');
    enableStartButton();
});

// Impossible Button Selection
impossibleButton.addEventListener('click', function() {
    currentDifficultyClass = 'impossible';
    easyButton.classList.remove('selected');
    hardButton.classList.remove('selected');
    impossibleButton.classList.remove('selected');
    impossibleButton.classList.add('selected');
    enableStartButton();
});

// Help Button Selection
helpButton.addEventListener('click', function() {
    helpMessage.style.display = 'block';
});

// X Button (close) Selection
closeHelp.addEventListener('click', function() {
    helpMessage.style.display = 'none';
});

// Start Button Selection
startButton.addEventListener("click", () => {
    if (currentDifficultyClass === '') {
        return;
    }
    initialize();
});

// Home Button Selection
homeButton.addEventListener('click', function() {
    resetGame();
});

// Home Button 2 Selection
homeButton2.addEventListener('click', function() {
    resetGame();
    hideEndScreen();

});

/////////////////////// CREATE FUNCTIONS TO INVOKE ELEMENTS ///////////////////////

// CREATE FUNCTIONS TO START GAME AND INVOKE OTHER ELEMENTS
// Define timerInstance globally
// Initialize function
function initialize() {
    hideHomeScreen();
    createRoom();

    // Get the randomly generated winning outfit
    const winningOutfit = selectRandomWinningOutfit();

    // Display the winning outfit image
    displayWinningOutfit(winningOutfit.outfitDisplay);
    
    // Console log winningOutfit
    console.log("Winning Outfit:", winningOutfit);

    // Create timer based on the current difficulty and store it in timerInstance
    timerInstance = createTimer(currentDifficultyClass);
    
    // Check outfit match every second for a maximum of the remaining time from the timerInstance
    const intervalId = setInterval(function() {

        // Console log remaining time of timer
        //console.log(timerInstance.remainingTime);
        
        // If timer is 0, stop check for outfit match and game lose. 
        if (timerInstance.remainingTime === 0) {
            clearInterval(intervalId);
            loseScreen();

        } else {

            // Else if outfit matches game wins.
            if (matchOutfit(winningOutfit)) {
                
                // Stop check for outfit match and stop timer, game wins.
                clearInterval(intervalId); 
                winScreen();
                stopTimer();
            }
        }       
    }, 1000);
}


// Function to reset game 
function resetGame() {
    resetTimer();
    resetPlayerAppearance();
    resetFurnitureSelect();
    clearSlots();
    resetButtons();
    hideGameScreen();
    hideEndScreen();
    enableHomeScreen();
}

// Function to enable start button 
function enableStartButton() {
    if (currentDifficultyClass !== '') {
        startButton.classList.add('enabled');
        startButton.removeAttribute('disabled');
    } else {
        startButton.classList.remove('enabled');
        startButton.setAttribute('disabled', 'disabled');
    }
}

// Function to reset away highlighted buttons
function resetButtons () {
    difficultyButtons.forEach(button => {
        button.classList.remove('selected');
    });
    startButton.classList.remove('enabled');
    startButton.setAttribute('disabled', 'disabled');
    currentDifficultyClass = '';
}


// Function hide home screen
function hideHomeScreen () {
    document.querySelector('.home-screen').style.display = 'none';
}


// Function hide game screen
function hideGameScreen () {
    document.querySelector('.game-screen').style.display = 'none';
}


// Function unhide home screen
function enableHomeScreen () {
    document.querySelector('.home-screen').style.display = 'block';
}

// CREATE FUNCTIONS FOR WIN LOSE STATE
// Function to match the player's outfit with the provided winning outfit
function matchOutfit(winningOutfit) {
    
    // Check if playerOutfit is empty
    if (playerOutfit.length === 0) {
      console.log("Player outfit is empty.");
      return false;
    }
  
    // Initialize category for outfit matching
    var categories = ['top', 'bottom', 'cap', 'shoe'];
  
    // Iterate over each category and check if it matches the winning outfit
    for (let category of categories) {

        // Find category on the specific item selected by player 
        var playerItem = playerOutfit.find(item => item.category === category);

        // Find category on the specific item chosen by winning outfit
        var winningItem = winningOutfit[category];
        
        // If the winningItem is not found or its imageUrl doesn't match, return false
        if (!(playerItem.tag === winningItem.tag)) {
            console.log("Outfits do not match.");
            return false;
        }
    }
  
    // If all categories match, log success and return true
    console.log("Outfits match");
    return true;
  }

  function winScreen () {
    document.querySelector('.end-screen').style.display = 'block'; 
    document.querySelector('.win-screen').style.display = 'block';
  }

  function loseScreen () {
    document.querySelector('.end-screen').style.display = 'block'; 
    document.querySelector('.lose-screen').style.display = 'block';
  }

  function hideEndScreen () {
    document.querySelector('.end-screen').style.display = 'none'; 
    document.querySelector('.win-screen').style.display = 'none'; 
    document.querySelector('.lose-screen').style.display = 'none'; 
  }