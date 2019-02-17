function solve() {
    let input = document.getElementById('str').value;
    let numInput = input.split('').map(Number);

    let characters = countDigits(input);

    console.log(characters);

    let innerText = numInput.slice(characters, numInput.length - characters);
    let newArr = [];
    let groupCh = 8;
    let digits = [];

    while (innerText.length > 0) {
        let el = innerText.slice(0, groupCh).join('');

        innerText = innerText.slice(groupCh);
        let digit = parseInt(el.toString(), 2);
        digits.push(digit);
        newArr.push(el);

    }

    let letters = '';
    for (let i = 0; i < digits.length; i++) {
        let letter = String.fromCharCode(digits[i]);
        letters += letter;
    }


    let pattern = /[A-Za-z ]+/gm;
    let result = letters.match(pattern);

    let resultEl = document.getElementById('result');
    let finalResult = '';


    for (let i = 0; i < result.length; i++) {
        finalResult += result[i];
    }
    resultEl.textContent = finalResult;

    function countDigits(num) {
        let result = num;
        while (result.length > 1) {
            let temp = result
                .split('')
                .map(Number)
                .reduce((a, b) => a + b)
                .toString();

            result = temp;
        }
        return result;
    }


}