function solve(arr, arg){

    let closure = (function () {

        return {
            asc: function ascending(arr) {
                return arr.sort((a, b) => (a - b))
            },
            desc: function descending(arr) {
                return arr.sort((a, b) => (b - a))
            }
        }
    })();


    return closure[arg](arr);
}

console.log(solve([14, 7, 17, 6, 8], 'asc'));
console.log(solve([14, 7, 17, 6, 8], 'desc'));