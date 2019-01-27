function solve() {
    let stringInput = document.getElementById('string').value;
    let charInput = document.getElementById('character').value;

    let counter = 0;

    function countChar(text, letter) {
        for (let i = 0; i < text.length; i++) {
            if (text[i] === letter) {
                counter++;
            }
        }
        return counter;
    }

    let result = countChar(stringInput, charInput);
    let output = "";
    if (result % 2 === 0){
        output = `Count of ${charInput} is even.`
    }else{
        output = `Count of ${charInput} is odd.`
    }

    let resultEl = document.getElementById('result');
    resultEl.innerHTML = output;
}