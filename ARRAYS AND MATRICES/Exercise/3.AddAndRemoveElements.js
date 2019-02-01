function solve(arr) {
    let firstNum = 1;
    let solveArr = [];

    let add = 'add';
    let remove = 'remove';

    for (let i = 0; i < arr.length; i++) {


        if (i === 0 && arr[i] === add) {
            solveArr.push(firstNum);
        } else if (i !== 0 && arr[i] === add) {
            solveArr.push(firstNum);
        } else if (arr[i] === remove && solveArr.length > 0) {
            solveArr.pop();
        }
        firstNum = firstNum + 1;
    }
    if (solveArr.length > 0) {
         return solveArr.join('\n');

    } else {
       return `Empty`;
    }
}


solve(['add',
    'add',
    'remove',
    'add',
    'add']
)