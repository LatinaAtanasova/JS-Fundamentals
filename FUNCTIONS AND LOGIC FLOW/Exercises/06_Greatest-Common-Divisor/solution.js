function greatestCD() {
    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById('num2').value);

    let result = getGCD(num1, num2);

    function getGCD(a, b) {
        if (b) {
            return getGCD(b, a % b);
        } else {
            return Math.abs(a);
        }
    }

    let resultEl = document.getElementById('result');
    resultEl.textContent = result;

}