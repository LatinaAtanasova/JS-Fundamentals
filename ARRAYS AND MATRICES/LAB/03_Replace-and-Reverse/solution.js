function solve() {
    let inputText = document.getElementById('arr').value;
    let inputArr = JSON.parse(inputText);

    let arr = [];

    for (let i = 0; i < inputArr.length; i++) {
        let element = reverse(inputArr[i]);
        element = capitalizeFirstLetter(element);
        arr.push(element);
    };

    function reverse(s){
        return s.split("").reverse().join("");
    }

    function capitalizeFirstLetter(text) {
        return text.charAt(0).toUpperCase() + text.slice(1);
    }

    let resultEl = document.getElementById('result');
    resultEl.textContent = arr.join(' ');

}