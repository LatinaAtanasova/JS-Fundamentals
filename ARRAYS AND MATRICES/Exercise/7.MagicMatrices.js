function solve(arr){
    let rowSum = 0;
    //rows sum
    for (let row = 0; row < arr.length; row++) {
        let currentRowSum = 0;
        for (let col = 0; col < arr[row].length; col++) {
            currentRowSum += arr[row][col];
        }
        if (row === 0){
            rowSum = currentRowSum;
        } else if (rowSum !== currentRowSum){
            return false;
        }
    }
    // col sum
    for (let col = 0; col < arr[0].length; col++) {
        let colsSum = 0;
        for (let row = 0; row < arr.length; row++) {
            colsSum += arr[row][col];
        }
        if (colsSum != rowSum){
            return false;
        }
    }
    return true;
}

console.log(solve([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
));