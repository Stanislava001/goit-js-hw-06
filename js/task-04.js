const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const counterEl = document.querySelector("#value");
let counterValue = 0;

decrementBtn.addEventListener("click", onDecrBtnClick);

incrementBtn.addEventListener("click", onIncrBtnClick);

function onDecrBtnClick() {
counterEl.textContent = counterValue -= 1;
}

function onIncrBtnClick() {
counterEl.textContent = counterValue += 1;
}