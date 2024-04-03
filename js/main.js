//Implement logic for handling game state transitions 
//Manage game initialization and setup.

/////////////////////// IMPORT JS FILES ///////////////////////

import { createRoom, resetFurnitureSelect } from './room.js';
import { createTimer, resetTimer } from './timer.js';
import { clearSlots, selectRandomWinningOutfit, displayWinningOutfit, resetPlayerAppearance, matchOutfit } from './selection.js';

/////////////////////// CREATE VARIABLES ///////////////////////

let currentDifficultyClass = '';

/////////////////////// CACHE DOM ELEMENTS ///////////////////////

// Cache Buttons
const difficultyButtons = document.querySelectorAll('.button');
const easyButton = document.getElementById('easyButton');
const hardButton = document.getElementById('hardButton');
const impossibleButton = document.getElementById('impossibleButton');
const helpButton = document.getElementById('helpButton');
const startButton = document.getElementById('startButton');
const homeButton = document.getElementById('homeButton');

// Cache Popout elements
const helpModal = document.getElementById('helpModal');
const closeHelp = document.querySelector('.close');

// Hide Elements
document.querySelector('.game-screen').style.display = 'none'; 

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

/////////////////////// CREATE FUNCTIONS TO INVOKE ELEMENTS ///////////////////////

// CREATE FUNCTIONS TO START GAME AND INVOKE OTHER ELEMENTS
// Initialize function
function initialize() { 
    hideHomeScreen();
    createRoom();
    createTimer(currentDifficultyClass);

    // Get the randomly generated winning outfit
    const winningOutfit = selectRandomWinningOutfit();

    // Display the winning outfit image
    displayWinningOutfit(winningOutfit.outfitDisplay);
    
    // Console log winningOutfit
    console.log("Winning Outfit:", winningOutfit);

    // Check outfit match every second for a maximum of 30 seconds
    let secondsElapsed = 0;
    const intervalId = setInterval(function() {
        if (secondsElapsed >= 30) {
            clearInterval(intervalId); // Stop checking after 30 seconds
        } else {
            // Log the winning outfit
            matchOutfit(winningOutfit);
            secondsElapsed++;
        }
    }, 1000);
}

// Function to reset game 
function resetGame() {
    hideGameScreen();
    enableHomeScreen();
    resetButtons();
    resetTimer();
    resetPlayerAppearance();
    resetFurnitureSelect();
    clearSlots();
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


