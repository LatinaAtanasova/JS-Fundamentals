function solve() {
    let arr = JSON.parse(document.getElementById('arr').value);
    let arrAsc = arr.map(Number).sort((a, b) => a-b) ;
    let arrAlp = arr.sort();


    let resultEl = document.getElementById('result');
    let div = document.createElement("div");
    div.textContent = arrAsc.join(', ');
    resultEl.appendChild(div);

    let div2 = document.createElement("div");
    div2.textContent = arrAlp.join(', ');
    resultEl.appendChild(div2);


}