// Implement the timer logic.
// Set up different timer durations based on difficulty settings.
// Display the timer on the game screen.

/////////////////////// CREATE VARIABLES ///////////////////////

// Set difficulity and seconds
const difficultyTimes = {
    'easy': 45,
    'hard': 25,
    'impossible': 10
};

// Set initial currentTimer
let currentTimer = null;

/////////////////////// CACHE DOME ELEMENTS ///////////////////////

const timerDom = document.getElementById('timerDisplay');

/////////////////////// CREATE EVENT LISTENERS ///////////////////////
/////////////////////// CREATE CONSTRUCTOR ///////////////////////

class Timer {
    constructor() {
        this.interval = null;
        this.remainingTime = 0;
    }

    start(duration) {
        // Set initial remaining time
        this.remainingTime = duration;

        // Update timer display immediately
        this.updateTimerDisplay(); 

        // Start interval to update timer display every second
        this.interval = setInterval(() => {
            if (this.remainingTime === 0) {
                // If times up, stop timer and execute callback
                this.stop();
                this.callback();
            } else {
                // Decrement remaining time and update timer display
                this.remainingTime--;
                this.updateTimerDisplay(); 
            }
        }, 1000);
    }

    // Reset Timer
    reset() {
        clearInterval(this.interval);
        this.remainingTime = 0;
        this.updateTimerDisplay();
    }

    // Update timer display with current remaining time
    updateTimerDisplay() {
        // Calculate remaining time divide by 60 and remove decimal numbers
        const minutes = Math.floor(this.remainingTime / 60);

        // Calculate remaining time in seconds & find the remainder when divided by 60
        const seconds = this.remainingTime % 60;
    
        // Add pre-fix zero if seconds is less than 10
        let formattedSeconds = seconds;
        if (seconds < 10) {
            formattedSeconds = '0' + seconds;
        }
    
        // Construct timer in string
        const displayString = `${minutes}:${formattedSeconds}`;

        // Display Timer on screen
        timerDom.textContent = displayString;
    }    
}

/////////////////////// CREATE FUNCTIONS TO INVOKE ELEMENTS ///////////////////////

// Function to generate new Timer
function createTimer(difficulty) {
    const newTimer = new Timer();

    // Determine the initial duration of the timer based on the selected difficulty
    let duration = difficultyTimes[difficulty];

    resetTimer();

    // Set currentTimer to the new timer instance
    currentTimer = newTimer;

    // Start the timer
    newTimer.start(duration);
    newTimer.updateTimerDisplay();
    return newTimer;
}

// Function to reset timer
function resetTimer() {
    if (currentTimer) {
        currentTimer.reset();
    }
}

export { createTimer, resetTimer };