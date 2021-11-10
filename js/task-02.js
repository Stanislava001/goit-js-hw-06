const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredList = document.querySelector('#ingredients')

const makeIngrList = ingredients => {
  return ingredients.map((ingredient) => {
    const ingredientEl = document.createElement("li");
    ingredientEl.classList.add("item");
    ingredientEl.textContent = ingredient;
 
    return ingredientEl;
    });
}

const elements = makeIngrList(ingredients);
ingredList.append(...elements);



