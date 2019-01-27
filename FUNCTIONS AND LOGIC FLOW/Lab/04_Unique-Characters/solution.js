function solve() {
    let stringInput = document.getElementById('string').value;
    let uniqueLetters = [];

    stringInput.split('').forEach(x =>{
        if ( /(\s+)/.test(x) || !uniqueLetters.includes(x)){
            uniqueLetters.push(x);
        }
    });

    let resultEl = document.getElementById('result');
    resultEl.innerHTML = uniqueLetters.join('');

}