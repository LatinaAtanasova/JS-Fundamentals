function solve() {
  let firstNumber = Number(document.getElementById('firstNumber').value);
  let secondNumber = Number(document.getElementById('secondNumber').value);
  let firstString = document.getElementById('firstString').value;
  let secondString = document.getElementById('secondString').value;
  let thirdString = document.getElementById('thirdString').value;
  let resultEl = document.getElementById('result');

    for (let i = firstNumber; i <= secondNumber; i++) {
        let pElement = document.createElement('p');
        let message = '';


            if ( i % 3 === 0 && i % 5 === 0){
                message = `${i} ${firstString}-${secondString}-${thirdString}`;
            }
            else if(i % 3 === 0){
                message = `${i} ${secondString}`;
            }
            else if(i % 5 === 0){
                message = `${i} ${thirdString}`;
            }else{
                message = `${i}`;
            }

        pElement.innerHTML = message;
        resultEl.appendChild(pElement);
    }
}