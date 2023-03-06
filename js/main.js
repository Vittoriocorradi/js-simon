'use strict';

const startButton = document.getElementById('start-game');

startButton.addEventListener('click',
function() {
    const randomNumbersContainer = document.getElementById('random-numbers-container');
    const randomNumbers = [];
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
})