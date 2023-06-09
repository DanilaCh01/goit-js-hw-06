const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulList = document.querySelector("#ingredients");
const ingredientsArray = ingredients.map(ingredient => {
  const ingredientsItem = document.createElement("li");
  ingredientsItem.textContent = ingredient;
  ingredientsItem.classList.add("item");

  return ingredientsItem;
});

ulList.append(...ingredientsArray);
