const bodyEl = document.body;
const spanEl = document.querySelector(".color");
const btnChanger = document.querySelector(".change-color");

btnChanger.addEventListener('click', callback);

function callback() {
  const currentColor = getRandomHexColor();
  bodyEl.style.backgroundColor = currentColor;
  spanEl.textContent = currentColor;
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};