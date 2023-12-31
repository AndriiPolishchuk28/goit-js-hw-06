function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeBtnRef = document.querySelector('.change-color');
const spanRef = document.querySelector('.color')

changeBtnRef.addEventListener('click', () => {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  spanRef.textContent = color;
})
