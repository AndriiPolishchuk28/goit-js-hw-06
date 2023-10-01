const refsCategories = document.querySelector('#categories');
const refsItems = document.querySelectorAll('.item')

function getInfoList(categories, item) {
    console.log(`Number of categories: ${categories.children.length}`);
    item.forEach(elem => {
        const liElement = elem.querySelectorAll('li')
        console.log(`Category: ${elem.firstElementChild.textContent}`);
        console.log(`Elements: ${liElement.length}`);

    })
    
}

getInfoList(refsCategories, refsItems)