function solve(arr){
    let sortedArr = [arr[0]];
    let num = arr[0];



        for (let i = 1; i < arr.length; i++) {
            if (arr[i] >= num) {
                sortedArr.push(arr[i]);
                num = arr[i];
            }

        }
    console.log(sortedArr.join('\n'));
}

solve([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
)