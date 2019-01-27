function solve() {


  let firstNum = Number(document.getElementById('num1').value);
  let secondNum = Number(document.getElementById('num2').value);
  let resultEl = document.getElementById('result');

    resultEl.innerHTML = '';


  if (firstNum > secondNum){


      let message = `Try with other numbers.`;
      resultEl.innerHTML = message;
  }
  else{
      for (let i = firstNum; i <= secondNum; i++) {
          let message = `${i} * ${secondNum} = ${i * secondNum}`;
          let pElement = document.createElement('p');
          pElement.innerHTML = message;
          resultEl.appendChild(pElement);
      }
  }

}