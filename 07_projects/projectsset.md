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