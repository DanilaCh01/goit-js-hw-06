const inputControlEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");

spanEl.style.fontSize = `${inputControlEl.value}px`;
inputControlEl.addEventListener('input', onInputControl);

function onInputControl(event) {
    spanEl.style.fontSize = `${event.target.value}px`;

};