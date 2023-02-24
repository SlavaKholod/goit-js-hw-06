const onDecrBtn = document.querySelector("[data-action='decrement']");
const onIncrBtn = document.querySelector("[data-action='increment']");
const valuueSpan = document.querySelector("#value");

onDecrBtn.addEventListener('click', decreseVal);
onIncrBtn.addEventListener('click', increseVal);

var counterValue = 0;

function decreseVal()  {
    counterValue -= 1;
    return valuueSpan.textContent = counterValue;
}

function increseVal() {
    counterValue += 1;
    return valuueSpan.textContent = counterValue;
}