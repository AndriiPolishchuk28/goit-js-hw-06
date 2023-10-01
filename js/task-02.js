const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const refsIngredients = document.querySelector('#ingredients')


function createListIngredients(arr) {
  const liElements = [];
  
  arr.forEach( elem => {
    const liItem = document.createElement('li')
    liItem.classList.add('item')
    liItem.textContent = elem;
    liElements.push(liItem)
  });
  refsIngredients.append(...liElements)
}

createListIngredients(ingredients)
