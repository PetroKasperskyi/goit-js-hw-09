const buttonStart = document.querySelector('[data-start]');
const buttonStop = document.querySelector('[data-stop]');
const body = document.querySelector('body');

let timerId = null;

buttonStop.disabled = true;

buttonStart.addEventListener('click', () => {
  body.style.backgroundColor = getRandomHexColor();
  buttonStart.disabled = true;
  buttonStop.disabled = false;
  timerId = setInterval(onButtonStart, 1000);
});

function onButtonStart() {
  body.style.backgroundColor = getRandomHexColor();
}

buttonStop.addEventListener('click', () => {
  clearInterval(timerId);
  buttonStart.disabled = false;
  buttonStop.disabled = true;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
