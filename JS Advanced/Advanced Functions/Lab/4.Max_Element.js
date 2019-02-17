function solve(arr){
    return Math.max.apply(null, arr)
}

function solve1(arr){
    return Math.max(...arr)
}

console.log(solve([10, 20, 5]));
console.log(solve1([1, 44, 123, 33]));