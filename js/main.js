'use strict';

const startButton = document.getElementById('start-game');

// Evento inizia gioco
startButton.addEventListener('click',
function() {

    // Variabili
    const randomNumbersContainer = document.getElementById('random-numbers-container');
    const userNumbersContainer = document.getElementById('user-numbers-container');
    const correctNumbersContainer = document.getElementById('correct-numbers-container');
    const numbersTitle = document.querySelectorAll('#numbers-title');
    const msg = document.getElementById('correct-numbers-msg');
    const randomNumbers = [];
    const timer = document.getElementById('timer')
    const userNumbers = [];
    const correctNumbers = [];

    // Pulizia pagina all'inizio dell'evento
    randomNumbersContainer.innerHTML = '';
    userNumbersContainer.innerHTML = '';
    correctNumbersContainer.innerHTML = '';
    msg.innerHTML = '';
    timer.innerHTML = '';
    randomNumbersContainer.classList.remove('hidden');
    userNumbersContainer.classList.add('hidden');
    correctNumbersContainer.classList.add('hidden');
    for (let i = 0; i < 2; i++) {
        numbersTitle[i].classList.add('hidden');
    }
    timer.style.display = 'block';

    // Numeri casuali
    for (let i = 0; i < 5; i++) {
        const randomNumber = Math.floor(Math.random() * 1000 + 1);
        randomNumbers.push(randomNumber);
        const element = document.createElement('div');
        element.innerText = randomNumber;
        randomNumbersContainer.append(element);
    }
    
    // Countdown
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
    }, 1000)

    // Inizio parte attiva dell'utente
    setTimeout(function() {

        // Input dell'utente
        let userNumber = []
        while (userNumbers.length !== 5) {
            userNumber = Number(prompt('Inserisci i numeri'));
            if (isNaN(userNumber)) {
                alert('Devi inserire un numero!');
            } else {
                userNumbers.push(userNumber);
            }
        }

        // Comparsa dei contenitori e i loro titoli
        timer.style.display = 'none';
        randomNumbersContainer.classList.remove('hidden');
        userNumbersContainer.classList.remove('hidden');
        correctNumbersContainer.classList.remove('hidden');
        for (let i = 0; i < 2; i++) {
            numbersTitle[i].classList.remove('hidden');
        }

        // Numeri scelti dall'utente appesi
        for (let i = 0; i < 5; i++) {
            const element = document.createElement('div');
            element.innerText = userNumbers[i];
            userNumbersContainer.append(element);

            // Numeri scelti correttamente dall'utente appesi
            if (randomNumbers.includes(userNumbers[i])) {
                correctNumbers.push(userNumbers[i]);
                const correctNumber = document.createElement('div');
                correctNumber.innerText = correctNumbers[i];
                correctNumbersContainer.append(correctNumber);
            }
            
            // Messaggio punteggio
            if (correctNumbers.length >= 1) {
                msg.innerHTML = `Numeri che sei riuscito a ricordare correttamente: ${correctNumbers.length}`;
            } else {
                correctNumbersContainer.innerHTML = '-----';
                msg.innerHTML = `Peccato, non sei riuscito a ricordare neanche un numero!`;
            }
        }
    }, 31000)
})