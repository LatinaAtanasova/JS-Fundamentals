function solve() {


    let selectElementTo = document.getElementById('selectMenuTo');

    let resultElement = document.getElementById('result');

    let option1 = document.querySelector('#selectMenuTo option');
    option1.textContent = 'Binary';

    let option2 = document.createElement('option');
    selectElementTo.appendChild(option2);
    option2.textContent = 'hexadecimal';

    let button = document.getElementsByTagName('button')[0];
    button.addEventListener('click', (event) => {
        event.target;

        let inputNumber = document.getElementById('input').value;
        inputNumber = Number(inputNumber);
        let result;

        if (inputNumber < 0) {
            inputNumber = 0xFFFFFFFF + inputNumber + 1;
        }
        if (option1.selected) {
            result = (inputNumber >>> 0).toString(2);
            resultElement.value = result;
        } else {

            result = inputNumber.toString(16).toUpperCase();
            resultElement.value = result;
        }
    })
}