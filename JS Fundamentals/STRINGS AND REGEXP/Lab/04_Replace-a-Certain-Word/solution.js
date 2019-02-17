function solve() {
    let text = JSON.parse(document.getElementById('arr').value);
    let word = document.getElementById('str').value;

    let firstString = text[0].split(' ');
    let wordToBeReplaced = firstString[2];

    let pattern1 = new RegExp(wordToBeReplaced, "gmi");


    let resultEl = document.getElementById('result');
    let message = '';

    for (let i = 0; i < text.length; i++) {
        if (text[i].match(pattern1)) {
            message = text[i].replace(pattern1, word);
        }else{
            message = text[i];
        }
        let p = document.createElement('p');
        p.textContent = message;
        resultEl.appendChild(p);
    }


}