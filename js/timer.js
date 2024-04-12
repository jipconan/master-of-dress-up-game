const difficultyTimes = {
    'easy': 30,
    'hard': 15,
    'impossible': 7
};

let currentTimer = null;

const timerDom = document.getElementById('timerDisplay');

class Timer {
    constructor() {
        this.interval = null;
        this.remainingTime = '';
    }

    start(duration) {

        this.remainingTime = duration;

        this.updateTimerDisplay(); 

        this.interval = setInterval(() => {
            if (this.remainingTime === 0) {

                this.reset();
                
            } else {

                this.remainingTime--;
                this.updateTimerDisplay(); 
            }
        }, 1000);
    }

    reset() {
        clearInterval(this.interval);
        this.remainingTime = '';
        this.updateTimerDisplay();
    }

    stop() {
        clearInterval(this.interval);
    }

    updateTimerDisplay() {

        const minutes = Math.floor(this.remainingTime / 60);

        const seconds = this.remainingTime % 60;
    
        let formattedSeconds = seconds;
        if (seconds < 10) {
            formattedSeconds = '0' + seconds;
        }
    
        const displayString = `${minutes}:${formattedSeconds}`;

        timerDom.textContent = displayString;
    }    
}

function createTimer(difficulty) {
    const newTimer = new Timer();

    let duration = difficultyTimes[difficulty];

    currentTimer = newTimer;

    newTimer.start(duration);
    newTimer.updateTimerDisplay();
    return newTimer;
}

function resetTimer() {
    if (currentTimer) {
        currentTimer.reset();
    }
}

function stopTimer() {
    if (currentTimer) {
        currentTimer.stop();
    }
}

export { createTimer, resetTimer, stopTimer };