const input = document.querySelector('#font-size-control');
console.log(input.value)

const spanEl = document.querySelector('#text');
console.log(spanEl);

input.setAttribute("value", 56);
input.addEventListener('input', onTextFontChange);


function onTextFontChange() {
  spanEl.style.fontSize = input.value + "px";
    
}