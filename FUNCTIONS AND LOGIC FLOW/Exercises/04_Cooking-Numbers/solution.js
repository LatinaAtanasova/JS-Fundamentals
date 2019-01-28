function solve() {
    let chopBtn = document.querySelector('#operations button:nth-child(1)');
    let diceBtn = document.querySelector('#operations button:nth-child(2)');
    let spiceBtn = document.querySelector('#operations button:nth-child(3)');
    let bakeBtn = document.querySelector('#operations button:nth-child(4)');
    let filletBtn = document.querySelector('#operations button:nth-child(5)');

    let resultEl = document.querySelector('#output');

    chopBtn.addEventListener('click', chop);
    diceBtn.addEventListener('click', dice);
    spiceBtn.addEventListener('click', spice);
    bakeBtn.addEventListener('click', bake);
    filletBtn.addEventListener('click', fillet);

    function chop() {
        let inputValue = document.querySelector('#exercise input').value;
        let num = checkInput(inputValue);

        let newNum = num / 2;
        document.querySelector('#exercise input').value = newNum;
        resultEl.textContent = newNum;

    }

    function dice() {
        let inputValue = document.querySelector('#exercise input').value;
        let num = checkInput(inputValue);

        let newNum = Math.sqrt(num);
        document.querySelector('#exercise input').value = newNum;
        resultEl.textContent = newNum;
    }

    function spice() {
        let inputValue = document.querySelector('#exercise input').value;
        let num = checkInput(inputValue);

        let newNum = num + 1;
        document.querySelector('#exercise input').value = newNum;
        resultEl.textContent = newNum;
    }

    function bake() {
        let inputValue = document.querySelector('#exercise input').value;
        let num = checkInput(inputValue);

        let newNum = num *3;
        document.querySelector('#exercise input').value = newNum;
        resultEl.textContent = newNum;
    }

    function fillet() {
        let inputValue = document.querySelector('#exercise input').value;
        let num = checkInput(inputValue);

        let newNum =num*0.8;
        document.querySelector('#exercise input').value = newNum;
        resultEl.textContent = newNum;
    }

    function checkInput(inputNum) {

        if (inputNum === null || inputNum === '') {
           return Number(0);
        } else {
            return Number(inputNum);
        }
    }





}
