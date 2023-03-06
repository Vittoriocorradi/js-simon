'use strict';

const startButton = document.getElementById('start-game');

startButton.addEventListener('click',
function() {
    const randomNumbersContainer = document.getElementById('random-numbers-container');
    const userNumbersContainer = document.getElementById('user-numbers-container');
    const correctNumbersContainer = document.getElementById('correct-numbers-container');
    const numbersTitle = document.querySelectorAll('#numbers-title');
    const msg = document.getElementById('correct-numbers-msg');
    randomNumbersContainer.classList.remove('hidden');
    const randomNumbers = [];
    const timer = document.getElementById('timer')
    const userNumbers = [];
    const correctNumbers = [];

    randomNumbersContainer.innerHTML = '';
    userNumbersContainer.innerHTML = '';
    correctNumbersContainer.innerHTML = '';
    timer.innerHTML = '';

    console.log(numbersTitle);

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
                randomNumbersContainer.classList.add('hidden');
                clearInterval(time);
            }
    }, 300)

    setTimeout(function() {
        let userNumber = []
        while (userNumbers.length !== 5) {
            userNumber = Number(prompt('Inserisci i numeri'));
            if (isNaN(userNumber)) {
                alert('Devi inserire un numero!');
            } else {
                userNumbers.push(userNumber);
            }
            console.log(userNumbers);
        }

        randomNumbersContainer.classList.remove('hidden');
        for (let i = 0; i < 2; i++) {
            numbersTitle[i].classList.remove('hidden');
        }

        
        for (let i = 0; i < 5; i++) {
            const element = document.createElement('div');
            element.innerText = userNumbers[i];
            userNumbersContainer.append(element);

            if (randomNumbers.includes(userNumbers[i])) {
                correctNumbers.push(userNumbers[i]);
                const correctNumber = document.createElement('div');
                correctNumber.innerText = correctNumbers[i];
                correctNumbersContainer.append(correctNumber);
            }
        
        msg.innerHTML = `Sei riuscito a ricordarti correttamente ${correctNumbers.length} numeri!`;
            
        }

        console.log(correctNumbers);
        console.log(correctNumbers.length);
    }, 10000)
})