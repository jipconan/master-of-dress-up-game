import { Room, resetFurnitureSelect } from './room.js';
import { createTimer, resetTimer, stopTimer } from './timer.js';
import { clearSlots, resetPlayerAppearance, playerOutfit } from './selection.js';
import { selectRandomWinningOutfit, displayWinningOutfit } from './outfit.js';

let currentDifficultyClass = '';
let timerInstance = '';
let winningOutfit = '';

const difficultyButtons = document.querySelectorAll('.button');
const easyButton = document.getElementById('easyButton');
const hardButton = document.getElementById('hardButton');
const impossibleButton = document.getElementById('impossibleButton');
const helpButton = document.getElementById('helpButton');
const creditButton = document.getElementById('creditButton');
const homeButton = document.getElementById('homeButton');
const homeButton2 = document.querySelectorAll('.home-button2');

const closeHelp = document.querySelectorAll('.close');

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

hardButton.addEventListener('click', function() {
    resetGame();
    currentDifficultyClass = 'hard';
    if (currentDifficultyClass === '') {
        return;
    }
    initialize();
});

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

helpButton.addEventListener('click', function() {
    helpMessage.style.display = 'block';
});

creditButton.addEventListener('mouseover', function() {
    this.classList.add('highlighted');
});

creditButton.addEventListener('mouseout', function() {
    this.classList.remove('highlighted');
});

creditButton.addEventListener('click', function() {
    creditMessage.style.display = 'block';
});

closeHelp.forEach(homeButton2 => {
    homeButton2.addEventListener('click', function() {
        helpMessage.style.display = 'none';
        creditMessage.style.display = 'none';;
    });
});

homeButton.addEventListener('click', function() {
    resetGame();
});

homeButton2.forEach(homeButton2 => {
    homeButton2.addEventListener('click', function() {
        resetGame();
        hideEndScreen();
    });
});

function initialize() {
    hideHomeScreen();
    createRoom();

    winningOutfit = selectRandomWinningOutfit();

    displayWinningOutfit(winningOutfit.outfitDisplay);
    
    console.log("Winning Outfit:", winningOutfit);

    timerInstance = createTimer(currentDifficultyClass);

    const intervalId = setInterval(function() {

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

            if (matchOutfit(winningOutfit)) {
                
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

function resetButtons () {
    difficultyButtons.forEach(button => {
        button.classList.remove('selected');
    });
    currentDifficultyClass = '';
}

function hideHomeScreen () {
    document.querySelector('.home-screen').style.display = 'none';
}

function hideGameScreen () {
    document.querySelector('.game-screen').style.display = 'none';
}

function enableHomeScreen () {
    document.querySelector('.home-screen').style.display = 'flex';
}

function matchOutfit(winningOutfit) {
    
    if (playerOutfit.length === 0) {
      console.log("Player outfit is empty.");
      return false;
    }

    var categories = ['top', 'bottom', 'cap', 'shoe'];
  
    for (let category of categories) {

        var playerItem = playerOutfit.find(item => item.category === category);

        var winningItem = winningOutfit[category];

        if (!(playerItem.tag === winningItem.tag)) {
            console.log("Outfits do not match.");
            return false;
        }
    }
  
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