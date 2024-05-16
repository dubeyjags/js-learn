# Project releted to markdown

## Projectlink
[click  here](https://stackblitz.com/)


### Project 1 Solution
```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id) {
      body.style.backgroundColor = e.target.id;
    }
  });
});
```
### Project 2 solutions

```javascript
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = this.querySelector('#result');

  if (!height || height < 0 || isNaN(height)) {
    result.innerHTML = 'please give a valid height';
  } else if (!weight || weight < 0 || isNaN(weight)) {
    result.innerHTML = 'please give a valid weight';
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    let bmiVal = '';
    if (bmi < 18.6) {
      bmiVal = 'under weight';
    } else if (bmi >= 24.9) {
      bmiVal = 'Overweight';
    } else {
      bmiVal = 'normal weight';
    }
    result.innerHTML = `<span>${bmi} you are ${bmiVal}</span>`;
  }
});

```

### Project 3 Solutions

```javascript 
const clock = document.getElementById('clock');

setInterval(function () {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```

### Project 4 Solution
```javascript
let random = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#submit');
const userInput = document.querySelector('.guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParam');
const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('please Enter the valid number');
  } else if (guess < 0) {
    alert('please Enter the more then 0');
  } else if (guess > 100) {
    alert('please Enter the less then 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayGuess(`game Over. Random numer was ${random}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === random) {
    displayMsg(`you guessed right`);
    endGame();
  } else if (guess < random) {
    displayMsg(`Number is T00 Low`);
  } else if (guess > random) {
    displayMsg(`Number is T00 High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess} `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMsg(msg) {
  lowOrHi.innerHTML = `<h2>${msg}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h3 id="newGame">Start New Game</h3>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameBtn = document.querySelector('#newGame');
  newGameBtn.addEventListener('click', function (e) {
    e.defaultPrevented();
    random = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}

```