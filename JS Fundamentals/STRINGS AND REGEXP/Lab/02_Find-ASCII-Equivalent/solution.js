function solve() {
    let stringInput = document.getElementById('str').value;
    let resultEl = document.getElementById('result');

    let words = [];
    let numbers = [];


    let string = stringInput
        .split(' ')
        .filter(x => x !== ' ')
        .forEach(x => {
            if (isNaN(x)) {
                let newWord = x.split('').map(char => char.charCodeAt(0)).join(' ');
                let p = document.createElement('p');
                p.textContent = newWord;
                resultEl.appendChild(p);
                //words.push(newWord);
            } else {
                numbers.push(x);
            }
        });

    let str = '';

    str = String.fromCharCode(...numbers);

    /*for (let i = 0; i < numbers.length; i++) {
        let string1 = String.fromCharCode(numbers[i]);
        str += string1;
    }*/

    let p1 = document.createElement('p');
    p1.textContent = str;
    resultEl.appendChild(p1);

}