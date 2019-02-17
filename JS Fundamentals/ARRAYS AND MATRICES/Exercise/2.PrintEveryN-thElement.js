function solve(arr){
    let lastEl = Number(arr.pop());
   for (let i = 0; i < arr.length; i+=lastEl) {
        console.log(arr[i]);
    }
}

solve(['dsa',
    'asd',
    'test',
    'tset',
    '2']

)