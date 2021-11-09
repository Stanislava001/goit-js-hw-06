const categoriesEl = document.querySelectorAll(".item");
console.log("Number of categories: ", categoriesEl.length);

const categoriesTitle = [];
categoriesEl.forEach((el) => {
  return categoriesTitle.push(
      `Category: ${el.querySelector('h2').textContent},
Elements: ${el.querySelectorAll('ul>li').length}`
  );
});
console.log(...categoriesTitle);


