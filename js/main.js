//Implement logic for handling game state transitions 
//Manage game initialization and setup.

/////////////////////// IMPORT JS FILES ///////////////////////

import { Room, resetFurnitureSelect } from './room.js';
import { createTimer, resetTimer, stopTimer } from './timer.js';
import { clearSlots, resetPlayerAppearance, playerOutfit } from './selection.js';
import { selectRandomWinningOutfit, displayWinningOutfit } from './outfit.js';

/////////////////////// CREATE VARIABLES ///////////////////////

let currentDifficultyClass = '';
let timerInstance = '';
let winningOutfit = '';

/////////////////////// CACHE DOM ELEMENTS ///////////////////////

// Cache Buttons
const difficultyButtons = document.querySelectorAll('.button');
const easyButton = document.getElementById('easyButton');
const hardButton = document.getElementById('hardButton');
const impossibleButton = document.getElementById('impossibleButton');
const helpButton = document.getElementById('helpButton');
const creditButton = document.getElementById('creditButton');
const homeButton = document.getElementById('homeButton');
const homeButton2 = document.querySelectorAll('.home-button2');

// Cache Popout elements
const closeHelp = document.querySelectorAll('.close');

// Hide Elements
document.querySelector('.game-screen').style.display = 'none'; 
document.querySelector('.end-screen').style.display = 'none'; 

document.querySelector('.win-screen').style.display = 'none'; 
document.querySelector('.win2-screen').style.display = 'none'; 
document.querySelector('.win3-screen').style.display = 'none'; 

document.querySelector('.lose-screen').style.display = 'none'; 
document.querySelector('.lose2-screen').style.display = 'none'; 
document.querySelector('.lose3-screen').style.display = 'none'; 

document.getElementById('roomImage').style.display = 'none'; 
document.getElementById('roomImage2').style.display = 'none'; 
document.getElementById('roomImage3').style.display = 'none';

document.getElementById('bubbleImage').style.display = 'none'; 
document.getElementById('bubbleImage2').style.display = 'none'; 
document.getElementById('bubbleImage3').style.display = 'none';

document.querySelector('.furniture-set').style.display = 'none'; 
document.querySelector('.furniture2-set').style.display = 'none'; 
document.querySelector('.furniture3-set').style.display = 'none'; 

/////////////////////// CREATE EVENT LISTENERS ///////////////////////

// Easy Button Selection
easyButton.addEventListener('mouseover', function() {
    this.classList.add('highlighted');
});

easyButton.addEventListener('mouseout', function() {
    this.classList.remove('highlighted');
});

easyButton.addEventListener('click', function() {
    currentDifficultyClass = 'easy';
    if (currentDifficultyClass === '') {
        return;
    }
    initialize();
});

// Hard Button Selection
hardButton.addEventListener('click', function() {
    resetGame();
    currentDifficultyClass = 'hard';
    if (currentDifficultyClass === '') {
        return;
    }
    initialize();
});

// Impossible Button Selection
impossibleButton.addEventListener('click', function() {
    resetGame();
    currentDifficultyClass = 'impossible';
    if (currentDifficultyClass === '') {
        return;
    }
    initialize();
});

helpButton.addEventListener('mouseover', function() {
    this.classList.add('highlighted');
});

helpButton.addEventListener('mouseout', function() {
    this.classList.remove('highlighted');
});

// Help Button Selection
helpButton.addEventListener('click', function() {
    helpMessage.style.display = 'block';
});

creditButton.addEventListener('mouseover', function() {
    this.classList.add('highlighted');
});

creditButton.addEventListener('mouseout', function() {
    this.classList.remove('highlighted');
});

// Help Button Selection
creditButton.addEventListener('click', function() {
    creditMessage.style.display = 'block';
});

// X Button (close) Selection
closeHelp.forEach(homeButton2 => {
    homeButton2.addEventListener('click', function() {
        helpMessage.style.display = 'none';
        creditMessage.style.display = 'none';;
    });
});

// Home Button Selection
homeButton.addEventListener('click', function() {
    resetGame();
});

// Home Button 2 Selection
homeButton2.forEach(homeButton2 => {
    homeButton2.addEventListener('click', function() {
        resetGame();
        hideEndScreen();
    });
});

/////////////////////// CREATE FUNCTIONS TO INVOKE ELEMENTS ///////////////////////

// CREATE FUNCTIONS TO START GAME AND INVOKE OTHER ELEMENTS
// Define timerInstance globally
// Initialize function
function initialize() {
    hideHomeScreen();
    createRoom();

    // Get the randomly generated winning outfit
    winningOutfit = selectRandomWinningOutfit();

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
            if (currentDifficultyClass === 'easy') {
                loseScreen();
            } else if (currentDifficultyClass === 'hard') {

                loseScreen2();
            } else if (currentDifficultyClass === 'impossible') {

                loseScreen3();
            } else {
                console.log('game error')
            }

        } else {

            // Else if outfit matches game wins.
            if (matchOutfit(winningOutfit)) {
                
                // Stop check for outfit match and stop timer, game wins.
                clearInterval(intervalId); 
                stopTimer();
                if (currentDifficultyClass === 'easy') {
                    winScreen();
                } else if (currentDifficultyClass === 'hard') {
                    winScreen2();
                } else if (currentDifficultyClass === 'impossible') {
                    winScreen3();
                } else {
                    console.log('game error')
                }
            }
        }       
    }, 1000);
}

// Generate Room function
function createRoom () {
    const newRoom = new Room();
    if (currentDifficultyClass === 'easy') {
        newRoom.generateRoom();
    } else if (currentDifficultyClass === 'hard') {
        newRoom.generateRoom2();
    } else if (currentDifficultyClass === 'impossible') {
        newRoom.generateRoom3();
    } else {
        console.log(`room error`)
    }
    newRoom.selectFurniture();
 };

// Function to reset game 
function resetGame() {
    hideEndScreen();
    resetTimer();
    resetPlayerAppearance();
    resetFurnitureSelect();
    clearSlots();
    resetButtons();
    hideGameScreen();
    enableHomeScreen();
}

// Function to reset away highlighted buttons
function resetButtons () {
    difficultyButtons.forEach(button => {
        button.classList.remove('selected');
    });
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
    document.querySelector('.home-screen').style.display = 'flex';
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

        // Add time to timer if selected correct clothes
        
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
    document.querySelector('.win2-screen').style.display = 'none';
    document.querySelector('.win3-screen').style.display = 'none';
  }

  function winScreen2 () {
    document.querySelector('.end-screen').style.display = 'block'; 
    document.querySelector('.win2-screen').style.display = 'block';
    document.querySelector('.win3-screen').style.display = 'none';
    document.querySelector('.win-screen').style.display = 'none';
  }

  function winScreen3 () {
    document.querySelector('.end-screen').style.display = 'block'; 
    document.querySelector('.win3-screen').style.display = 'block';
    document.querySelector('.win-screen').style.display = 'none';
    document.querySelector('.win2-screen').style.display = 'none';
  }

  function loseScreen () {
    document.querySelector('.end-screen').style.display = 'block'; 
    document.querySelector('.lose-screen').style.display = 'block';
    document.querySelector('.lose2-screen').style.display = 'none';
    document.querySelector('.lose3-screen').style.display = 'none';
  }

  function loseScreen2 () {
    document.querySelector('.end-screen').style.display = 'block'; 
    document.querySelector('.lose2-screen').style.display = 'block';
    document.querySelector('.lose3-screen').style.display = 'none';
    document.querySelector('.lose-screen').style.display = 'none';
  }

  function loseScreen3 () {
    document.querySelector('.end-screen').style.display = 'block'; 
    document.querySelector('.lose3-screen').style.display = 'block';
    document.querySelector('.lose-screen').style.display = 'none';
    document.querySelector('.lose2-screen').style.display = 'none';
  }

  function hideEndScreen () {
    document.querySelector('.end-screen').style.display = 'none'; 
    document.querySelector('.win-screen').style.display = 'none';
    document.querySelector('.win2-screen').style.display = 'none'; 
    document.querySelector('.win3-screen').style.display = 'none';  
    document.querySelector('.lose-screen').style.display = 'none'; 
    document.querySelector('.lose2-screen').style.display = 'none'; 
    document.querySelector('.lose3-screen').style.display = 'none'; 
  }

  export { timerInstance, winningOutfit };