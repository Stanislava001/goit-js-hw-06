function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector('body')

const spanColor = document.querySelector('.color')
spanColor.textContent = getRandomHexColor();

const buttonEl = document.querySelector('.change-color')
buttonEl.addEventListener('click', (event) => {
  return bodyEl.style.backgroundColor = spanColor.textContent;
})