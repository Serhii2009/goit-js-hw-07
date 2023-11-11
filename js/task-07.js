const buttonBall = document.querySelector('#font-size-control');
const textUp = document.querySelector('#text');

buttonBall.addEventListener('input', () => {
  text.style.fontSize = `${buttonBall.value}px`;
});
