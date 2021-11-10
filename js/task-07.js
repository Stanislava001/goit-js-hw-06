const input = document.querySelector('#font-size-control');
console.log(input.value)

const spanEl = document.querySelector('#text');
console.log(spanEl);

spanEl.style.fontSize = "56px";
input.addEventListener('input', onTextFontChange);


function onTextFontChange() {
  spanEl.style.fontSize = input.value + "px";
}