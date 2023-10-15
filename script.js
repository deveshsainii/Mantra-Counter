const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const countDisplay = document.getElementById('count');
const resetBtn = document.getElementById('reset');
const alertSound = document.getElementById('alertSound');

let count = localStorage.getItem('mantraCount') ? parseInt(localStorage.getItem('mantraCount')) : 0;
updateDisplay();

increaseBtn.addEventListener('click', () => {
    count++;
    if (count % 108 === 0) {
        alertSound.play(); // Play sound every 108 counts
    }
    updateDisplay();
    localStorage.setItem('mantraCount', count);
});

decreaseBtn.addEventListener('click', () => {
    count--;
    if (count % 108 === 0) {
        alertSound.play(); // Play sound every 108 counts
    }
    updateDisplay();
    localStorage.setItem('mantraCount', count);
});

resetBtn.addEventListener('click', () => {
    count = 0;
    updateDisplay();
    localStorage.setItem('mantraCount', count);
});

function updateDisplay() {
    countDisplay.textContent = count;
}
