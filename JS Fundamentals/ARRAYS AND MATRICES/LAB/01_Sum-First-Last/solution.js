function solve() {
    let inputText = document.getElementById('arr').value;
    let inputArr = JSON.parse(inputText);

    let resultEl = document.getElementById('result');

    for (let i = 0; i < inputArr.length; i++) {
        let inputArrElement = Number(inputArr[i]);

        let result = 0;
        result = inputArrElement * inputArr.length;

        let p = document.createElement('p');
        p.textContent = `${i} -> ${result}`;
        resultEl.appendChild(p);

    }
}