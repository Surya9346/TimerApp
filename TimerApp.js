let timer;
let timeLeft = 1500;
let isRunning = false;

function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60).toString().padStart(2, '0');
    const seconds = (timeLeft % 60).toString().padStart(2, '0');
    document.getElementById('timer').innerText = `${minutes}:${seconds}`;
}

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateDisplay();
            } else {
                clearInterval(timer);
                document.getElementById('alarm').play();
                isRunning = false;
            }
        }, 1000);
    }
}

function resetTimer() {
    clearInterval(timer);
    timeLeft = 1500;
    isRunning = false;
    updateDisplay();
}

function stopTimer() {
    clearInterval(timer);
    isRunning = false;
    updateDisplay();
}

function setMode(minutes) {
    clearInterval(timer);
    timeLeft = minutes * 60;
    isRunning = false;
    updateDisplay();
}

updateDisplay();