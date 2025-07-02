function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnChangeColor = document.querySelector('.change-color');
const textColor = document.querySelector('.color');
const body = document.querySelector('body');

const changeColor = function (event) {
  const color = getRandomHexColor();
  textColor.textContent = color;
  body.style.backgroundColor = color;
};

btnChangeColor.addEventListener('click', changeColor);
