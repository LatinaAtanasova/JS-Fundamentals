function binarySearch() {
    let array = document.getElementById('arr').value;
    let arrToBeSearched = array.split(', ');

    let num = document.getElementById('num').value;
    let result = '';

    if (arrToBeSearched.includes(num)){
        result = `Found ${num} at index ${arrToBeSearched.indexOf(num)}`;
    }
    else{
        result = `${num} is not in the array`;
    }


    let resultEl = document.getElementById('result');
    resultEl.textContent = result;
}