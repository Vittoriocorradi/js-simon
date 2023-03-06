'use strict';

const startButton = document.getElementById('start-game');

startButton.addEventListener('click',
function() {
    const randomNumbersContainer = document.getElementById('random-numbers-container');
    const randomNumbers = [];
    const timer = document.getElementById('timer')
    const correctNumbers = [];

    randomNumbersContainer.innerHTML = '';

    for (let i = 0; i < 5; i++) {
        const randomNumber = Math.floor(Math.random() * 1000 + 1);
        randomNumbers.push(randomNumber);
        const element = document.createElement('div');
        element.innerText = randomNumber;
        randomNumbersContainer.append(element);
    }
    
    console.log(randomNumbers);

    let i = 29;

    const time = setInterval(function() {
        
            if (i !== 0) {
                timer.innerHTML = i;
                i--;
            } else {
                timer.innerHTML = `Fine del tempo`;
                clearInterval(time);
            }
    }, 1000)
})