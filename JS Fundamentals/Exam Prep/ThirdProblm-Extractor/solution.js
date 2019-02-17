function solve() {
    document.getElementsByTagName('button')[0].addEventListener('click', () =>{
        let input = document.getElementById('input').value;

        let numberPattern = /[\d]+/gm;

        let charsToTake = input.match(numberPattern)[0];
        let slicedString = input.substr(charsToTake.length, charsToTake);
        let lastChar = slicedString[slicedString.length-1];
        let arr = slicedString.split(lastChar).filter(Boolean);
        let regexPattern = new RegExp(`[${arr[0]}]`, 'g');


        let result = arr[1].replace(regexPattern, '' );
        let newResult = result.split('#').join(' ');

        document.getElementById('output').value = newResult;



    })



}