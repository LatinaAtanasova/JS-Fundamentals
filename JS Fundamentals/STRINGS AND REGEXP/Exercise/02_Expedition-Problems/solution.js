function solve() {
    let key = document.getElementById('str').value;
    let text = document.getElementById('text').value;

    let regex = /(north|east)[\s\S]*?(\d{2})[^,]*?,[^,]*?(\d{6})/gmi;

    let m;

    let north = '';
    let east = '';

    while ((m = regex.exec(text)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }
        if (m[1].toLowerCase() === 'north') {
            north = `${m[2]}.${m[3]} N`;
        } else if (m[1].toLowerCase() === 'east') {
            east = `${m[2]}.${m[3]} E`;
        }
    };

    let messagePattern = new RegExp(`${key}(.*?)${key}`, 'gmi');

    let message = messagePattern.exec(text);

    let resultEl = document.getElementById('result');
    let p = document.createElement('p');


    let pnorth = p.cloneNode(true);
    pnorth.textContent = north;
    resultEl.appendChild(pnorth);
    let peast = p.cloneNode(true);
    peast.textContent = east;
    resultEl.appendChild(peast);
    let pmessage = p.cloneNode(true);
    pmessage.textContent = `Message: ${message[1]}`;
    resultEl.appendChild(pmessage)


}