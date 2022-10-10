const valueSetter = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
valueSetter.addEventListener('change', event => {
  text.style.fontSize = `${event.currentTarget.value}px`;
});
