function solve() {
  let inputText = document.getElementById('arr').value;
  let inputArr = JSON.parse(inputText);

  let result = [];
    for (let i = 0; i < inputArr.length; i++) {
        if (i % 2 == 0){
            result.push(inputArr[i]);
        }

    }

    let resultEl = document.getElementById('result');
    resultEl.textContent = result.join(' x ');

}