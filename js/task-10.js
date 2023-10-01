function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxesRef = document.querySelector('#boxes');
const createBtnRef = document.querySelector('[data-create]');
const destroyBtnRef = document.querySelector('[data-destroy]');
const inputRef = document.querySelector('input');

createBtnRef.addEventListener('click', () => {
  createBoxes(inputRef.value);
})

destroyBtnRef.addEventListener('click', () => {
  destroyBoxes();
})


function createBoxes(amount) {
  const arr = [];
  let size = 30;

  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement('div');
    div.style.backgroundColor = getRandomHexColor();
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    size += 10;
    arr.push(div);
  }

  boxesRef.append(...arr)
}

function destroyBoxes() {
  boxesRef.innerHTML = ''
}


