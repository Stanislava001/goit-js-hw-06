const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredList = document.querySelector('#ingredients')
 
for (let i of ingredients) {
  const ingredientEl = document.createElement("li");
    ingredientEl.classList.add("item");
    ingredientEl.textContent = i;

   ingredList.appendChild(ingredientEl);
}


