let timer;
let isRunning = false;
let milliseconds = 0, seconds = 0, minutes = 0, hours = 0;

function startStop() {
    if (isRunning) {
        clearInterval(timer);
        document.getElementById('startStop').innerText = 'Start';
    } else {
        timer = setInterval(updateDisplay, 1);
        document.getElementById('startStop').innerText = 'Stop';
    }
    isRunning = !isRunning;
}

function reset() {
    clearInterval(timer);
    isRunning = false;
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateDisplay();
    document.getElementById('startStop').innerText = 'Start';
}

function updateDisplay() {
    milliseconds++;
    if (milliseconds === 1000) {
        milliseconds = 0;
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }
        }
    }

    const display = document.getElementById('display');
    display.innerText = formatTime(hours) + ':' + formatTime(minutes) + ':' + formatTime(seconds) + '.' + formatMilliseconds(milliseconds);
}

function formatTime(time) {
    return time < 10 ? '0' + time : time;
}

function formatMilliseconds(milliseconds) {
    return milliseconds < 10 ? '00' + milliseconds : milliseconds < 100 ? '0' + milliseconds : milliseconds;
}
