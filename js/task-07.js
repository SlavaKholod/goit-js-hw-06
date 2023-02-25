const fontSizeControlEl = document.querySelector("#font-size-control");
const textSizeChangeEl = document.querySelector("#text");

fontSizeControlEl.addEventListener("input", chengeSizeOfText);

textSizeChangeEl.style.fontSize = `${fontSizeControlEl.value}px`;

function chengeSizeOfText() {
    textSizeChangeEl.style.fontSize = `${fontSizeControlEl.value}px`;
}