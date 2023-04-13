//get the count element
const countEl = document.getElementById('count');

//get the plus, minus and reset buttons
const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');
const resetBtn = document.getElementById('reset');

//initialize the count to 0
let count = 0;

// add event listeners to the buttons
plusBtn.addEventListener('click', () => {
    count++;
    countEl.textContent = count;
});
minusBtn.addEventListener('click', () => {
    count--;
    countEl.textContent = count;
});
resetBtn.addEventListener('click', () => {
    count = 0;
    countEl.textContent = count;
});