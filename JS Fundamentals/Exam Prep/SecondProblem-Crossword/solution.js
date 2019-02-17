function solve() {
    let buttons = document.getElementsByTagName('button');

    buttons[0].addEventListener('click', filter);
    buttons[1].addEventListener('click', sort);
    buttons[2].addEventListener('click', rotate);
    buttons[3].addEventListener('click', get);

    let output = document.getElementById('output');
    let p = output.children[0];


    function filter() {
        let input = document.getElementById('input').value.split('');
        let selectedItems = document.getElementById('filterSecondaryCmd');
        let selection = selectedItems.options[selectedItems.selectedIndex].value;
        let position = Number(document.getElementById('filterPosition').value) - 1;

        let char;
        if (selection === 'uppercase') {
            char = input.filter(c => c === c.toUpperCase())[position];
            p.textContent += char;
        } else if (selection === 'lowercase') {
            char = input.filter(c => c === c.toLowerCase())[position];
            p.textContent += char;
        } else if (selection === 'nums') {
            char = input.filter(c => !isNaN(c))[position];
            p.textContent += char;

        }
        console.log(p);

        function sort() {
            let input = document.getElementById('input').value.split('').sort((a,b) => a.localeCompare(b));
            let secondCmd = document.getElementById('sortSecondaryCmd').value;
            let position = (+document.getElementById('sortPosition').value) -1;

        }

        function rotate() {

        }

        function get() {

        }
    }
}