function solve(arr){
    let sum = arr.reduce((acc, x) => acc + x);
    let min = arr.reduce((acc, x) => acc > x ? x : acc, Number.MAX_SAFE_INTEGER);
    let max = arr.reduce((acc, x) => acc < x ? x : acc, Number.MIN_SAFE_INTEGER);
    let product = arr.reduce((acc, x) => acc * x);
    let join = arr.reduce((acc, x) => acc + x, '');
    console.log(`Sum = ${sum}`);
    console.log(`Min = ${min}`);
    console.log(`Max = ${max}`);
    console.log(`Product = ${product}`);
    console.log(`Join = ${join}`);
}

solve([2, 3, 10, 5])