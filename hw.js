document.addEventListener("readystatechange", (e) => {
    if (document.readyState === "interactive") {
        initHelloWorld();
    }
});

var input;
var output;

function initHelloWorld() {
    input = document.getElementById("hw-input");
    output = document.getElementById("hw-field");
    output.innerText = input.value;

    input.addEventListener("input", updateOutput);
}

function updateOutput(e) {
    output.innerText = input.value;
}