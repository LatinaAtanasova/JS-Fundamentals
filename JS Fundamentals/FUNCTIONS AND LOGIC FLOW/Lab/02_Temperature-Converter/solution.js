function solve() {
    let num = Number(document.getElementById('num1').value);
    let measure = document.getElementById('type').value;
    let resultEl = document.getElementById('result');
    let result;


    if (measure.toLowerCase() === "fahrenheit") {
        result = Math.round((num - 32) / 1.8);
    } else if (measure.toLowerCase() === "celsius") {
        result = Math.round(1.8 * num + 32);
    }else{
        result = 'Error!';
    }


    resultEl.innerHTML = result;
}