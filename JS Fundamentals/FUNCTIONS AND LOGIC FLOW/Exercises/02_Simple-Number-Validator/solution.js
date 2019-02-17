function validate() {
    let checkBtn = document.querySelector('#exercise>fieldset>div>button');
    checkBtn.addEventListener('click', checkNumber);

    function checkNumber() {
        let inputNummber = document.querySelector('#exercise>fieldset>div>input').value;
        let sum = 0;
        let message;

        let weightArray = [2, 4, 8, 5, 10, 9, 7, 3, 6];

        for (let i = 0; i < 9; i++) {
            sum += Number(inputNummber[i]) * Number(weightArray[i]);
        }

        let remainder = sum % 11;
        if (remainder === 10) {
            remainder = 0
        }
        ;

        if (Number(inputNummber[9]) === remainder) {
            message = `This number is Valid!`;
        } else {
            message = `This number is NOT Valid!`;
        }
        let responseEl = document.getElementById('response');
        responseEl.innerHTML = message;

    }


}