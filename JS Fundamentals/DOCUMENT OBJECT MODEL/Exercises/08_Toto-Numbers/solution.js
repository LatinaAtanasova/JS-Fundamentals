function solve() {
    let button = document.getElementsByTagName('button')[0];
    let divNumbers = document.getElementById('allNumbers');

    button.addEventListener('click', checkNumbers);

    function checkNumbers(){

        let inputNumbers = document.getElementsByTagName('input')[0].value;
        let numbers = Array.from(inputNumbers.split(' '));

        if (numbers.length > 6 || numbers.length < 6){
            return;
        }
        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] < 1 || numbers[i] > 49) {
                return;
            }
        }

        for (let i = 1; i <= 49; i++) {
            let divEl = document.createElement('div');
            divEl.textContent = String(i);
            divEl.classList.add('numbers');

            for (let j = 0; j < numbers.length; j++) {
                if (numbers[j] === divEl.textContent) {
                    divEl.style.backgroundColor = "orange";
                }

            }
            divNumbers.appendChild(divEl);
        }

        document.getElementsByTagName('input')[0].disabled = true;

        document.getElementsByTagName('button')[0].setAttribute('disabled', 'true');


    };


}