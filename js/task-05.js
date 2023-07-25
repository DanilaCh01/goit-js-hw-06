const inputValue = document.querySelector("#name-input");
const outputValue = document.querySelector("#name-output");

inputValue.addEventListener('input', onNameInput);

function onNameInput(event) {
    outputValue.textContent = event.target.value.trim() === "" ?  "Anonymous" :  event.target.value.trim();
}