// Timer functionality
let timer;
let startTime;

function startTimer() {
    startTime = Date.now();
    timer = setInterval(() => {
        const elapsed = ((Date.now() - startTime) / 1000).toFixed(2);
        document.getElementById('timerDisplay').textContent = elapsed;
    }, 10);
}

function stopTimer() {
    clearInterval(timer);
}

function resetTimer() {
    clearInterval(timer);
    document.getElementById('timerDisplay').textContent = '0.00';
}

