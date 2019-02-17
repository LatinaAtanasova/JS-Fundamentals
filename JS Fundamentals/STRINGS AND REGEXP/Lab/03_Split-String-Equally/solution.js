function solve() {
    let text = document.getElementById('str').value;
    let counter = Number(document.getElementById('num').value);
    let parts = Math.ceil(text.length / counter);
    let arr = [];
    let formatedText = text.slice(0, text.length);

    while (formatedText) {
        if (formatedText.length < counter) {
            arr.push(formatedText + text.substr(0, counter-formatedText.length));
            break;
        } else {
            arr.push(formatedText.substr(0, counter));
            formatedText = formatedText.substr(counter);
        }
    }

    let resultEl = document.getElementById('result');
    resultEl.textContent = arr.join(' ');


}
