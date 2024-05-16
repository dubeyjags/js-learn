# Project releted to markdown

## Projectlink
[click  here](https://stackblitz.com/)

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