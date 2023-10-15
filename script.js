const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const countDisplay = document.getElementById('count');
const malaDisplay = document.getElementById('malaCount'); // Element to display Mala count
const resetBtn = document.getElementById('reset');
const alertSound = document.getElementById('alertSound');

let count = localStorage.getItem('mantraCount') ? parseInt(localStorage.getItem('mantraCount')) : 0;
let malaCount = localStorage.getItem('malaTotal') ? parseInt(localStorage.getItem('malaTotal')) : 0; // Variable for Mala count
updateDisplay();

increaseBtn.addEventListener('click', () => {
    count++;
    if (count % 108 === 0) {
        malaCount++; // Increment Mala count
        alertSound.play(); // Play sound every 108 counts
    }
    updateDisplay();
    localStorage.setItem('mantraCount', count);
    localStorage.setItem('malaTotal', malaCount); // Store Mala count in localStorage
});

decreaseBtn.addEventListener('click', () => {
    if (count > 0) {
        count--;
    } else if (malaCount > 0) {
        malaCount--;
        count += 107; // if we're decrementing from a full mala, set count to 107
    }
    updateDisplay();
    localStorage.setItem('mantraCount', count);
    localStorage.setItem('malaTotal', malaCount); // Store Mala count in localStorage
});

resetBtn.addEventListener('click', () => {
    count = 0;
    malaCount = 0; // Reset Mala count too
    updateDisplay();
    localStorage.setItem('mantraCount', count);
    localStorage.setItem('malaTotal', malaCount); // Reset Mala count in localStorage
});

function updateDisplay() {
    countDisplay.textContent = count;
    malaDisplay.textContent = `${malaCount} Malas`; // Display Mala count
}
