function solve() {
    let arr1 = JSON.parse(document.getElementById('arr').value);

    let pattern = /^([A-Z][a-z]* [A-Z][a-z]*) (\+359 \d{1} \d{3} \d{3}|\+359-\d{1}-\d{3}-\d{3}) ([a-z0-9]+@[a-z]+.[a-z]{2,3})$/gm;

    let resultEl = document.getElementById('result');
    let p = document.createElement('p');

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i].match(pattern)) {
            let result = pattern.exec(arr1[i]);

            attachText(`Name: ${result[1]}`);
            attachText(`Phone Number: ${result[2]}`);
            attachText(`Email: ${result[3]}`);
            attachText(`- - -`);


        }
        else{
            attachText(`Invalid data`);
            attachText(`- - -`);
        }

    }

    function attachText(text) {
        let pEl = p.cloneNode(true);
        pEl.textContent = text;
        resultEl.appendChild(pEl);
    }


}