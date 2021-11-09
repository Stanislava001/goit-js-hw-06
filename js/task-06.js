const input = document.querySelector('#validation-input');
input.addEventListener('blur', onInputChangeColor)

function onInputChangeColor(event) {
    console.log(event.currentTarget.value.length)
    if (event.currentTarget.value.length == input.dataset.length) {
        input.classList.add("valid");
        input.classList.remove("invalid");
        return;}
        
    if (event.currentTarget.value.length != input.dataset.length) {
        return input.classList.add("invalid");}
}


