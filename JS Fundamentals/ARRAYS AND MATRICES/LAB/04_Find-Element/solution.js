function solve() {
    let input = Number(document.getElementById('num').value);

    let inputText = document.getElementById('arr').value;
    let inputArr = JSON.parse(inputText);
    console.log(inputArr);

    let result = [];

    for (let inputArrElement of inputArr) {
        let resultBool = inputArrElement.includes(input)
        let index = inputArrElement.indexOf(input);

        result.push(`${resultBool} -> ${index}`);
    }

    let resultEl = document.getElementById('result');
    resultEl.textContent = result.join(',');
}