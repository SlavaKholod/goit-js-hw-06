const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsListEl = document.querySelector("#ingredients");

const addItemsToList = ingredients.map((element) => {
    const addItem = document.createElement("li");
    addItem.textContent = element;
    addItem.classList.add("item");
    return addItem;
  });

ingredientsListEl.append(...addItemsToList);
