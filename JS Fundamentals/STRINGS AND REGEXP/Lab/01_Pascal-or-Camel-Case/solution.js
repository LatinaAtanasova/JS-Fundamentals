function solve() {
    let str1 = document.getElementById('str1').value;
    let str2 = document.getElementById('str2').value;

    let resultMessage = '';
    switch (str2) {
        case 'Camel Case':
            resultMessage = toCamelCase(str1);
            break;
        case'Pascal Case':
            resultMessage = toPascalCase(str1);
            break;
        default:
            resultMessage = `Error!`;
    }

    function toCamelCase(str) {
        return str.split(' ').map(function (word, index) {
            // If it is the first word make sure to lowercase all the chars.
            if (index === 0) {
                return word.toLowerCase();
            }
            // If it is not the first word only upper case the first char and lowercase the rest.
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }).join('');
    }

    function toPascalCase(str) {
        str = str.toLowerCase().split(' ');
        for (let i = 0; i < str.length; i++) {
            str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
        }
        return str.join('');
    };

    let resultEl = document.getElementById('result');
    resultEl.textContent = resultMessage;


}