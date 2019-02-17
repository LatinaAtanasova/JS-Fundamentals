function solve() {

    let number1 = Number(document.getElementById('num').value);

    let result = calculate(number1);

    function calculate(num) {

        let half = Math.floor(num / 2), // Ensures a whole number <= num.
            str = '1', // 1 will be a part of every solution.
            i, j;

        // Determine our increment value for the loop and starting point.
        num % 2 === 0 ? (i = 2, j = 1) : (i = 3, j = 2);

        for (i; i <= half; i += j) {
            num % i === 0 ? str += ' ' + i : false;
        }

        str += ' ' + num; // Always include the original number.
        return str;
    }
    let resultEl = document.getElementById('result');
    resultEl.textContent = result;

}